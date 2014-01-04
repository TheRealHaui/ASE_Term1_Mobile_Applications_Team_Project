var initialSearchFieldTextValue = "Aktienkürzel suchen";

$.searchFieldId.value = initialSearchFieldTextValue;

//Display page
$.mainWindowId.open();



function doSearchButtonClick(e) {

	var searchFieldValue = $.searchFieldId.value;

	if (searchFieldValue == "" || searchFieldValue == initialSearchFieldTextValue) {
		alert("Sie müssen mindestens einen Buchstaben zur Suche eingeben");
		$.searchFieldId.focus();
		return;
	}

	var stock = getShareListAsynchronous(searchFieldValue);

	showStockList(stock);

}




function getShareListAsynchronous(searchTerm) {

	//Because of same origin policy limitation in browser temporary faked.
	//So development can go on in browser.

	if (OS_MOBILEWEB) {
		
		var f = '"AAPL","Apple Inc.","540.98"';

		var i = f.split(",");

		//alert(i[0].replace("\"","").replace("\"","") );
		//alert(i[1].replace("\"","").replace("\"","") );
		//alert(i[2].replace("\"","").replace("\"","") );

		//http://docs.appcelerator.com/titanium/latest/#!/guide/Alloy_Collection_and_Model_Objects
		var stock = Alloy.createModel("stock", {
			sign : i[0].replace("\"", "").replace("\"", ""),
			stockName : i[1].replace("\"", "").replace("\"", ""),
			price : i[2].replace("\"", "").replace("\"", "")
		});

		//alert (stock.get("sign"));

		//todo
		return stock;
	}



	//todo
	var url = "http://finance.yahoo.com/d/quotes.csv?s=aapl&f=snl1";

	var client = Ti.Network.createHTTPClient({

		// function called when the response data is available
		onload : function(e) {
			Ti.API.debug("Received text: " + this.responseText);

			//http://docs.appcelerator.com/titanium/latest/#!/guide/Alloy_Collection_and_Model_Objects
			//var stock = Alloy.createModel("stock",{sign: i[0].replace("\"","").replace("\"",""),stockName: i[1].replace("\"","").replace("\"",""), price: i[2].replace("\"","").replace("\"","")});
			//alert (stock.get("sign"));

			alert('success' + this.responseText);
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



function showStockList(stock) {

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



function doTouchStart(e) {

	if ($.searchFieldId.value == initialSearchFieldTextValue) {
		$.searchFieldId.value = "";
	}

}

