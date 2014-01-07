var initialSearchFieldTextValue = "Personen suchen";

$.searchFieldId.value = initialSearchFieldTextValue;

//Display page
$.mainWindowId.open();

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
		alert("Sie müssen mindestens einen Buchstaben zur Suche eingeben");
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

function showTestLayout() {

	//http://docs.appcelerator.com/titanium/2.1/#!/guide/TableViews-section-29004930_TableViews-Customrows

	var tbl_data = [];

	var searchbar;

	//Titanium searbar wird nur auf Android, iPhone und iPad unterstützt.
	//http://docs.appcelerator.com/titanium/latest/#!/api/Titanium.UI.SearchBar
	if (!OS_MOBILEWEB) {
		searchbar = Ti.UI.createSearchBar({
			barColor : '#385292',
			showCancel : false
		});
	}

	for (var i = 0; i < 10; i++) {
		
		var row = Ti.UI.createTableViewRow();
		
		var label = Ti.UI.createLabel({
			left : 10,
			text : 'Row ' + (i + 1)
		});
		
		//todo
		var image = Ti.UI.createImageView({
			url : 'appicon.png'
		});
		
		var button = Ti.UI.createButton({
			right : 10,
			height : 30,
			width : 80,
			title : 'Details'
		});
		
		row.add(label);
		row.add(image);
		row.add(button);
		tbl_data.push(row);		
	}

	// now assign that array to the table's data property to add those objects as rows
	//Eventuell später noch auf ScrollView oder ScrollableView umstellen.
	//http://docs.appcelerator.com/titanium/2.1/#!/guide/Scrolling_Views
	//Funktioniert offensichtlich in Web nicht ...
	var table = Titanium.UI.createTableView({
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

function showStockList(stock) {

	showTestLayout();
	//todo
	return;

	//http://stackoverflow.com/questions/7465352/titanium-studio-adding-rows-to-section

	//alert(stock.get("stockName"));

	// CREATE RESULTS TABLEVIEW
	var tableViewData = Ti.UI.createTableView({
		backgroundColor : "white",
		//data : [{title: 'Apples'}, {title: 'Bananas'}, {title: 'Carrots'}, {title: 'Potatoes'}],
		data : [{
			title : 'Aktienkürzel: ' + stock.get("sign")
		}, {
			title : 'Name: ' + stock.get("stockName")
		}, {
			title : 'aktueller Preis in $: ' + stock.get("price")
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

	/*

	 http://docs.appcelerator.com/titanium/3.0/#!/api/Titanium.UI.TableViewRow

	 var win = Ti.UI.createWindow();

	 var tableData = [ {title: 'Apples'}, {title: 'Bananas'}, {title: 'Carrots'}, {title: 'Potatoes'} ];

	 var table = Ti.UI.createTableView({
	 data: tableData
	 });
	 win.add(table);
	 win.open();

	 */

}

/**
 var items = ['Television', 'Music System', 'Car', 'Bus', 'Train', 'Computer', 'Lap Top', 'I-Phone', 'Tablet', 'Electronics', 'Watch', 'Mouse'];

 function fillData() {
 var data = [];
 for (var i = 0; i < items.length; i++) {
 var row = Ti.UI.createTableViewRow({
 height : 50,
 title : items[i],
 color : 'gray',
 hasChild : true,
 font : {
 fontSize : 11
 },
 });
 data.push(row);
 }
 $.table.setData(data);
 }
 fillData();
 $.tabGroup.open();
 **/

function getShareListAsynchronousAndShowIt(searchTerm) {

	//Because of same origin policy limitation in browser temporary faked.
	//So development can go on in browser.

	if (OS_MOBILEWEB) {

		showStockList(getStockModelFromWebserviceContent('"AAPL","Apple Inc.","540.98"'));

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
	var url = "http://finance.yahoo.com/d/quotes.csv?s=" + searchTerm + "&f=snl1";

	var client = Ti.Network.createHTTPClient({

		// function called when the response data is available
		onload : function(e) {
			//Ti.API.debug("Received text: " + this.responseText);

			//http://docs.appcelerator.com/titanium/latest/#!/guide/Alloy_Collection_and_Model_Objects
			//var stock = Alloy.createModel("stock",{sign: i[0].replace("\"","").replace("\"",""),stockName: i[1].replace("\"","").replace("\"",""), price: i[2].replace("\"","").replace("\"","")});
			//alert (stock.get("sign"));

			//alert('success' + this.responseText);

			showStockList(getStockModelFromWebserviceContent(this.responseText));

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

function getStockModelFromWebserviceContent(webserviceContent) {

	var field = webserviceContent.split(",");

	//alert(field[0].replace("\"","").replace("\"","") );
	//alert(field[1].replace("\"","").replace("\"","") );
	//alert(field[2].replace("\"","").replace("\"","") );

	//http://docs.appcelerator.com/titanium/latest/#!/guide/Alloy_Collection_and_Model_Objects
	var stock = Alloy.createModel("stock", {
		sign : field[0].replace("\"", "").replace("\"", ""),
		stockName : field[1].replace("\"", "").replace("\"", ""),
		price : field[2].replace("\"", "").replace("\"", "")
	});

	//alert (stock.get("sign"));

	return stock;

}

