function Controller() {
    function doSearchButtonClick() {
        var searchFieldValue = $.searchFieldId.value;
        if ("" == searchFieldValue || searchFieldValue == initialSearchFieldTextValue) {
            alert("Sie müssen mindestens einen Buchstaben zur Suche eingeben");
            $.searchFieldId.focus();
            return;
        }
        getShareListAsynchronousAndShowIt(searchFieldValue);
        $.searchFieldId.focus();
    }
    function doTouchStart() {
        $.searchFieldId.value == initialSearchFieldTextValue && ($.searchFieldId.value = "");
    }
    function getShareListAsynchronousAndShowIt(searchTerm) {
        var url = "http://finance.yahoo.com/d/quotes.csv?s=" + searchTerm + "&f=snl1";
        var client = Ti.Network.createHTTPClient({
            onload: function() {
                showStockList(getPersonModelFromWebserviceContent(this.responseText));
            },
            onerror: function(e) {
                Ti.API.debug(e.error);
                alert("Leider ist folgender Fehler aufgetreten: " + e.error);
            },
            timeout: 5e3
        });
        client.open("GET", url);
        client.send();
    }
    function getPersonModelFromWebserviceContent(webserviceContent) {
        var field = webserviceContent.split(",");
        var person = Alloy.createModel("person", {
            firstName: field[0].replace('"', "").replace('"', ""),
            lastName: field[1].replace('"', "").replace('"', ""),
            emailAddress: field[2].replace('"', "").replace('"', ""),
            address: field[3].replace('"', "").replace('"', ""),
            telephoneNumber: field[3].replace('"', "").replace('"', "")
        });
        return person;
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.mainWindowId = Ti.UI.createWindow({
        id: "mainWindowId",
        title: "Personen suchen",
        fullscreen: "true",
        backgroundColor: "white"
    });
    $.__views.mainWindowId && $.addTopLevelView($.__views.mainWindowId);
    $.__views.searchViewId = Ti.UI.createView({
        id: "searchViewId",
        top: "2%",
        left: "2%",
        right: "2%"
    });
    $.__views.mainWindowId.add($.__views.searchViewId);
    $.__views.searchFieldId = Ti.UI.createTextField({
        borderStyle: Ti.UI.INPUT_BORDERSTYLE_BEZEL,
        keyboardToolbarColor: "#999",
        keyboardToolbarHeight: "40",
        top: "0%",
        left: "0%",
        width: "66%",
        value: "Personen suchen",
        id: "searchFieldId"
    });
    $.__views.searchViewId.add($.__views.searchFieldId);
    doSearchButtonClick ? $.__views.searchFieldId.addEventListener("return", doSearchButtonClick) : __defers["$.__views.searchFieldId!return!doSearchButtonClick"] = true;
    doTouchStart ? $.__views.searchFieldId.addEventListener("touchstart", doTouchStart) : __defers["$.__views.searchFieldId!touchstart!doTouchStart"] = true;
    $.__views.button = Ti.UI.createButton({
        id: "button",
        top: "0%",
        left: "70%",
        width: "30%",
        title: "Suchen"
    });
    $.__views.searchViewId.add($.__views.button);
    doSearchButtonClick ? $.__views.button.addEventListener("click", doSearchButtonClick) : __defers["$.__views.button!click!doSearchButtonClick"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    var initialSearchFieldTextValue = "Personen suchen";
    $.searchFieldId.value = initialSearchFieldTextValue;
    $.mainWindowId.open();
    __defers["$.__views.searchFieldId!return!doSearchButtonClick"] && $.__views.searchFieldId.addEventListener("return", doSearchButtonClick);
    __defers["$.__views.searchFieldId!touchstart!doTouchStart"] && $.__views.searchFieldId.addEventListener("touchstart", doTouchStart);
    __defers["$.__views.button!click!doSearchButtonClick"] && $.__views.button.addEventListener("click", doSearchButtonClick);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;