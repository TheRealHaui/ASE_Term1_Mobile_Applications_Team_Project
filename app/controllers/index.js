var initialSearchFieldTextValue = Ti.Locale.getString('search_message');
console.log("start");
$.searchFieldId.value = initialSearchFieldTextValue;

var win = Titanium.UI.createWindow({
   title: L('login'),
   backgroundColor: 'white'
});

var scrollView = Ti.UI.createScrollView({
	contentWidth: 'auto',
	contentHeight: 'auto',
  	showVerticalScrollIndicator: true,
    showHorizontalScrollIndicator: false,
    height: 'auto',
    width: 'auto'
});


var username = Titanium.UI.createTextField({
    borderStyle : Titanium.UI.INPUT_BORDERSTYLE_BEZEL,
    hintText : L('username'),
     color: 'black',
    keyboardToolbarColor : '#999',
    keyboardToolbarHeight : 40,
    top : 100,
    width : 300,  height: Ti.UI.SIZE
});
var label1 = Ti.UI.createLabel({
  color: '#900',
  font: { fontSize:48 },
  text:  L('login'),
  textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
  top: 30,
  width: 300, height: Ti.UI.SIZE
});
var label2 = Ti.UI.createLabel({
  color: '#900',
  font: { fontSize:48 },
  text: L('password'),
  textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
  top: 140,
  width: 300, height: Ti.UI.SIZE
});
var password = Titanium.UI.createTextField({
    borderStyle : Titanium.UI.INPUT_BORDERSTYLE_BEZEL,
    hintText : L('password'),
    passwordMask:true,
    color: 'black',
    keyboardToolbarColor : '#999',
    keyboardToolbarHeight : 40,
    top : 210,
    width : 300, height: Ti.UI.SIZE
});

var loginButton = Titanium.UI.createButton({
   title: L('startlogin'),
   top: 270,
   width: 100,
   height: 50
});

function checkPw(username, password)
{
	console.log ('Username:' + username);
	console.log ('password:' + password);
	var usern = username.trim();
	var passw = password.trim();
	
	var file = Titanium.Filesystem.getFile(Titanium.Filesystem.resourcesDirectory, "password.txt");
	
	if (file.exists())
	{
		
		var resources = file.read().text.split('\n');
		for(var i=0;i <resources.length;i++)
		{
			var data = resources[i].split(' ');
			var user = data[0].trim();
			var pw = data[1].trim();
			
	/*		console.log("Eingabe User länge:" + usern.length);
			console.log(user.length);
			console.log("Eingabe Password länge:" + passw.length);
			console.log(pw.length);
			console.log ('Vergleich Username:' + user);
			console.log ('Vergleich password:' + pw);
*/
			if (usern == user && passw == pw)	
				return true;
	   }

	}
	
	return false;
}

loginButton.addEventListener('click',function(e)
{
   Titanium.API.info("You clicked the button");
   console.log("Clicked button");
   
   if (username.value == "" || username.value === 'Username')
   {  alert(L('enterusername'));
   	  return;
  } else if (password.value == "" || password.value === 'Password') {
  	  alert(L('enterpassword'));
   	  return;
  }
  if (!checkPw(username.value, password.value))
       alert(L('notvalid'));
  else     
       {
   	   $.mainWindowId.open();
   	   Ti.Media.vibrate([0,500]);
   	   startAccelerator();
	   }	
});


win.add(label1);
win.add(username);
win.add(label2);
win.add(password);
win.add(loginButton);
//scrollView.add(view);
//win.add(scrollView);
win.open();
//$.loginWindowId.open();
console.log("nach open");
//Display page
//$.mainWindowId.open();
var offset = 100;
var lastTime = new Date().getTime();
var filter = 1.0;
//last values
var last_x = 0;
var last_y = 0;

var accelerometerCallback = function(e) {
	
	 //get current time
    var now = new Date().getTime();
     
    //check if time offset is passed
    if(lastTime + offset < now)
    {
    	if (last_x > e.x +5)	
    	{
    		//Ti.API.info("schütteln last x:" +last_x + " x" + e.x);
    		last_x = e.x * filter + last_x * (1 - filter);
    		$.searchFieldId.value = initialSearchFieldTextValue;
    	}	
        else {
           last_x = e.x * filter + last_x * (1 - filter);
        }

        //store last update time
        lastTime = now;
    }
  
  
};

function startAccelerator()
{
	if (Ti.Platform.model === 'Simulator' || Ti.Platform.model.indexOf('sdk') !== -1 ){
	  alert('Accelerometer does not work on a virtual device');
	} else {
	  Ti.Accelerometer.addEventListener('update', accelerometerCallback);
	  if (Ti.Platform.name === 'android'){
	    Ti.Android.currentActivity.addEventListener('pause', function(e) {
	      Ti.API.info("removing accelerometer callback on pause");
	      Ti.Accelerometer.removeEventListener('update', accelerometerCallback);
	    });
	    Ti.Android.currentActivity.addEventListener('resume', function(e) {
	      Ti.API.info("adding accelerometer callback on resume");
	      Ti.Accelerometer.addEventListener('update', accelerometerCallback);
	    });
	  }
	}
}

//Include webservice code that is in own javascript file
//ATTENTION
//Directory has been created on our own.
//AND take notice of the .. notaton!
//Obviously the library javascript files have to be
//put in each asset phone specific directory.
//This is a very, very library centric approach ...

//Javascript librariers must not contain references to alloy
//objects.
//That means no $ notation allowed.

//And this is not working with android over all.
//Ti.include("../commonjs/webservicerelated.js");

function doSearchButtonClick(e) {

	var searchFieldValue = $.searchFieldId.value;

	if (searchFieldValue == "" || searchFieldValue == initialSearchFieldTextValue) {
		alert(L('emptysearch'));
		$.searchFieldId.focus();
		return;
	}

	getShareListAsynchronousAndShowIt(searchFieldValue);

	$.searchFieldId.focus();

}

function doTouchStart(e) {

	if ($.searchFieldId.value == initialSearchFieldTextValue) {
		$.searchFieldId.value = "";
	}

}

function resultListButtonClicked(e) {
	
		//Who called me
		//http://developer.appcelerator.com/question/126708/respond-to-a-button-in-a-table-row-without-triggering-table-row-click
		if (e.source.toString() == "[object TiUIButton]") {
			//Custom data for event processing
			//http://stackoverflow.com/questions/9306145/titanium-mobileget-row-value-from-tableview-on-button-click-issue
			//alert('You clicked row ' + e.index + " " + e.source.toString() + e.source.customData + " " + e.source.toString());
			
			
			//Documentation regarding opening of windows is not right.
			//Or this does not work.
			//http://docs.appcelerator.com/titanium/latest/#!/api/Titanium.UI.Window
			
			
			//
			/*
			var additionalInformationWindow = Titanium.UI.createWindow({
				//url:'windows/additionalinformation.js'
				url:'test.js',
				title: 'Test'
				});
			*/
			
			
			//At first is the documentation wrong referring how to open new windows.
			//Second does this work with test window/controller item and so on but not with additionalinformation window/controller item and so on.
			
			var win=Alloy.createController('test').getView();
			win.open();
			
			
			//http://developer.appcelerator.com/question/150413/open-new-window-using-alloy
			//$.additionalinformation.open();
			
			//$.test.open();
			
		}


	//alert(e.toString + " asdf " + e.type);

}

function showTestLayout(persons) {

	//http://docs.appcelerator.com/titanium/2.1/#!/guide/TableViews-section-29004930_TableViews-Customrows

	var tbl_data = [];

	var searchbar;

	//Titanium searbar wird nur auf Android, iPhone und iPad unterstützt.
	//http://docs.appcelerator.com/titanium/latest/#!/api/Titanium.UI.SearchBar
	if (!OS_MOBILEWEB) {
		searchbar = Ti.UI.createSearchBar({
			barColor : '#385292',
			showCancel : false,
			color: 'black'
		});
	}

	
   for (var i=0; i < persons.length; i++ ) {

		console.log("i:" + i);
        var person = persons.at(i);
        console.log(person.get("firstName"));
    //alert(person.get("firstName"));
        var row =  Ti.UI.createTableViewRow();
        var label = Ti.UI.createLabel({
            left : 10,
            text : person.get("firstName") + " " + person.get("lastName") 
        });

		var buttonCall = Ti.UI.createButton({
			right : 100,
			height : 20,
			width : 20,
			backgroundImage : '/imagesForAllPlatforms/telefonhoerer.png',
			//backgroundSelectedImage:'/images/custom-slider-left.png',
			//title : 'Call',
			touchEnabled : true,

			//Transmit custom data for event processing
			//http://stackoverflow.com/questions/9306145/titanium-mobileget-row-value-from-tableview-on-button-click-issue
			//customData : "my custom data"
		});

		//Does not work, at least in webpages.
		//http://docs.appcelerator.com/titanium/3.0/#!/guide/Event_Handling
		//buttonCall.addEventListener("call",resultListButtonClicked);
		//buttonCall.addEventListener("call", function(e){ alert(1111); } );

		var buttonNav = Ti.UI.createButton({
			right : 70,
			height : 20,
			width : 20,
			backgroundImage : '/imagesForAllPlatforms/map.png',
		});

		var buttonEMail = Ti.UI.createButton({
			right : 40,
			height : 20,
			width : 20,
			backgroundImage : '/imagesForAllPlatforms/email.png',
		});

		var buttonAdditional = Ti.UI.createButton({
			right : 10,
			height : 20,
			width : 20,
			backgroundImage : '/imagesForAllPlatforms/i.png'
			//backgroundSelectedImage:'/images/custom-slider-left.png',
			//backgroundSelectedImage:'/images/custom-slider-left.png',
			//title : 'Weiteres'
		});

		row.add(label);

		//row.add(image);
		buttonCall.addEventListener('click', function (e)
		{
			console.log(person.get("telephonNumber"));
			Titanium.Platform.openURL('tel:'+person.get("telephonNumber"));
		});
		
		buttonAdditional.addEventListener('click', function(e)
		{
			var win = Alloy.createController('additionalinformation',person).getView();
  			win.open();
  			console.log("buttonclick Additional");
		});
		
		buttonEMail.addEventListener('click', function(e)
		{
			var emailDialog = Ti.UI.createEmailDialog();
			emailDialog.subject = "Hello from Titanium";
			emailDialog.toRecipients = [person.get("emailAddress")];
			emailDialog.messageBody = 'Appcelerator Titanium Sucks!';
			emailDialog.open();
		});
			
		row.add(buttonCall);
		row.add(buttonNav);
		row.add(buttonEMail);
		row.add(buttonAdditional);
		
		tbl_data.push(row);
	}

	// now assign that array to the table's data property to add those objects as rows
	//Eventuell später noch auf ScrollView oder ScrollableView umstellen.
	//http://docs.appcelerator.com/titanium/2.1/#!/guide/Scrolling_Views
	//Funktioniert offensichtlich in Web nicht ...
	var headertitle = L('result');
	var table = Titanium.UI.createTableView({
		id : "resultTableViewId",
		data : tbl_data,
		searchbar : searchbar,
		top : 40,
		left : "0%",
		//width : 260,
		//height : 250,
		borderColor : "black",
		borderWidth : 0,
		borderRadius : 0,
		headerTitle : headertitle
		//footerTitle:"Wow. That was cool!" + " todo",
	});

	//Row click listener
	//Has to be used because button click listener to not work.
	//http://developer.appcelerator.com/question/126708/respond-to-a-button-in-a-table-row-without-triggering-table-row-click
	table.addEventListener('click', resultListButtonClicked);

	
	var viewChildren = $.searchViewId.getChildren();
	
	//Altes Tableviewobjekt löschen und durch neues ersetzen
	//http://developer.appcelerator.com/question/78901/how-to-give-an-id-to-a-view-and-get-it-back-from-the-click-event
	//http://stackoverflow.com/questions/9791275/how-to-reload-tableview-in-titanium
	for(var i = 0; i < viewChildren.length; i++){
		
		if ( viewChildren[i].id == "resultTableViewId" ){
			$.searchViewId.remove( viewChildren[i] );
			break;
		}
	}

	//In bzw. mit Alloy xml Dateien generierte Elemente müssen immer mit Dollar und Punkt
	//Notation referenziert werden.	
	$.searchViewId.add(table);

}

function showNoResultLayout() {

	//http://docs.appcelerator.com/titanium/2.1/#!/guide/TableViews-section-29004930_TableViews-Customrows

	var tbl_data = [];

	var searchbar;

	//Titanium searbar wird nur auf Android, iPhone und iPad unterstützt.
	//http://docs.appcelerator.com/titanium/latest/#!/api/Titanium.UI.SearchBar
	/*
	if (!OS_MOBILEWEB) {
		searchbar = Ti.UI.createSearchBar({
			barColor : '#385292',
			showCancel : false
		});
	}
	*/

		var row = Ti.UI.createTableViewRow();

		var label = Ti.UI.createLabel({
			left : 10,
			titleid: 'noresult'
		});



	
		row.add(label);

		tbl_data.push(row);
	

	// now assign that array to the table's data property to add those objects as rows
	//Eventuell später noch auf ScrollView oder ScrollableView umstellen.
	//http://docs.appcelerator.com/titanium/2.1/#!/guide/Scrolling_Views
	//Funktioniert offensichtlich in Web nicht ...
	var table = Titanium.UI.createTableView({
		id : "resultTableViewId",
		data : tbl_data,
		searchbar : searchbar,
		top : 40,
		left : "0%",
		//width : 260,
		//height : 250,
		borderColor : "black",
		borderWidth : 0,
		borderRadius : 0,
		headerTitle : 'Ergebnisse',
		//footerTitle:"Wow. That was cool!" + " todo",
	});

	//In bzw. mit Alloy xml Dateien generierte Elemente müssen immer mit Dollar und Punkt
	//Notation referenziert werden.	
	$.searchViewId.add(table);

}

function showPersonList(persons) {

	
	//showTestLayout();
	if (persons == null || persons.length ===0 )
		showNoResultLayout();
	else
		showTestLayout(persons);	
	//todo
	return;

	//http://stackoverflow.com/questions/7465352/titanium-studio-adding-rows-to-section


	// CREATE RESULTS TABLEVIEW
	var tableViewData = Ti.UI.createTableView({
		backgroundColor : "white",
		//data : [{title: 'Apples'}, {title: 'Bananas'}, {title: 'Carrots'}, {title: 'Potatoes'}],
		data : [{
			title : 'Vorname: ' + persons.get("firstName")
		}, {
			title : 'Nachname: ' + persons.get("lastName")
		}],
		top : 40,
		left : "0%",
		//width : 260,
		//height : 250,
		borderColor : "black",
		borderWidth : 0,
		borderRadius : 0
	});

	//http://docs.appcelerator.com/titanium/3.0/#!/api/Titanium.UI.TableViewRow
	//http://developer.appcelerator.com/question/123289/remove-border-on-tableviewrow-inside-grouped-tableview

	/**
	 //for(var i = 0; i < results.length; i++) {
	 tableViewData.appendRow( Ti.UI.createTableViewRow({
	 className: 'row',
	 objName: 'row',
	 touchEnabled: true,
	 //height: 100,
	 //borderColor: "transparent",
	 data : [ {title: 'Aktienkürzel: ' + stock.get("sign")} ]
	 }) );
	 //}
	 **/

	//In bzw. mit Alloy xml Dateien generierte Elemente müssen immer mit Dollar und Punkt
	//Notation referenziert werden.
	$.searchViewId.add(tableViewData);


}

function getShareListAsynchronousAndShowIt(searchTerm) {

	//Because of same origin policy limitation in browser temporary faked.
	//So development can go on in browser.

	if (OS_MOBILEWEB) {
		
		var content = '[{"address":"asdf","emailAddress":"asdf","firstname":"asdf","id":1,"lastname":"asdf","telephonNumber":"asdf","version":0},{"address":"Allestrasse 12, 8010 Graz, Austria","emailAddress":"h.s@bekiffter.org","firstname":"Hans","id":2,"lastname":"Söllner","telephonNumber":"113 21423","version":0},{"address":"Grazer Straße 12, 8010 Graz, Austria","emailAddress":"m.kronberger@hotmail.com","firstname":"Michael","id":3,"lastname":"Kronberger","telephonNumber":"234 234 234","version":0},{"address":"Nirgendwo in Austria","emailAddress":"blabla@nirgendwo.at","firstname":"Bernhard","id":4,"lastname":"Eibegger","telephonNumber":"0664 1234567","version":0},{"address":"a","emailAddress":"a","firstname":"a","id":5,"lastname":"a","telephonNumber":"1","version":0}]';
		showPersonList(getPersonModelFromWebserviceContent(content));

		return;

	}

	//Take care.
	//Bloody shit **********
	//Eclispe added itsel because of its wonderful autocompletion features that are always that great
	//one semikolon to this line
	//var url = "http://finance.yahoo.com/d/quotes.csv?s=" + searchTerm + ""&f=snl1";
	//The result was that Javasript did not complain.
	//The mobile web version of the application worked.
	//And it was not anymore possible to compile the program for android.
	//The given error message of Alloy was "error".
	//And the given error message of the so wonderful juhu juhu new super duppa framework node.js was "error in uglify-js".
	//You are so great ...
	var url = "http://199.231.93.151:8080/perssearch/searchPerson/" + searchTerm;

	var client = Ti.Network.createHTTPClient({

		// function called when the response data is available
		onload : function(e) {
			//Ti.API.debug("Received text: " + this.responseText);

			//http://docs.appcelerator.com/titanium/latest/#!/guide/Alloy_Collection_and_Model_Objects
			//var stock = Alloy.createModel("stock",{sign: i[0].replace("\"","").replace("\"",""),stockName: i[1].replace("\"","").replace("\"",""), price: i[2].replace("\"","").replace("\"","")});
			//alert (stock.get("sign"));

			//alert('success' + this.responseText);

			showPersonList(getPersonModelFromWebserviceContent(this.responseText));
		//	showStockList(getPersonModelFromWebserviceContent(this.responseText));

		},

		// function called when an error occurs, including a timeout
		onerror : function(e) {
			Ti.API.debug(e.error);
			alert("Leider ist folgender Fehler aufgetreten: " + e.error);
		},

		timeout : 5000 // in milliseconds
	});

	// Prepare the connection.
	client.open("GET", url);

	// Send the request.
	client.send();

}

function getPersonModelFromWebserviceContent(webserviceContent) {

	var field = webserviceContent.split(",");
	
	var json = JSON.parse(webserviceContent);
	
	var library = Alloy.createCollection("person");
	
	for (i = 0; i < json.length; i++) {
		
		var person = Alloy.createModel("person", {
			firstName : json[i].firstname,
			lastName : json[i].lastname,
			emailAddress : json[i].emailAddress,
			address : json[i].address,
			telephonNumber : json[i].telephonNumber
		});
	    library.add(person);
   }

    console.log(library.length);

    return library;   

}

