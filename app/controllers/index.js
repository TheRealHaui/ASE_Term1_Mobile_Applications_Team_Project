var initialSearchFieldTextValue = "Aktienkürzel suchen";

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
Ti.include("../commonjs/webservicerelated.js");




function doSearchButtonClick(e) {

	var searchFieldValue = $.searchFieldId.value;

	if (searchFieldValue == "" || searchFieldValue == initialSearchFieldTextValue) {
		alert("Sie müssen mindestens einen Buchstaben zur Suche eingeben");
		$.searchFieldId.focus();
		return;
	}

	var stock = getShareListAsynchronous(searchFieldValue);

	showStockList(stock);
	
	$.searchFieldId.focus();

}




function doTouchStart(e) {

	if ($.searchFieldId.value == initialSearchFieldTextValue) {
		$.searchFieldId.value = "";
	}

}

