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
    function showTestLayout() {
        var tbl_data = [];
        var searchbar;
        for (var i = 0; 10 > i; i++) {
            var row = Ti.UI.createTableViewRow();
            var label = Ti.UI.createLabel({
                left: 10,
                text: "Row Row Row Row Row Row" + (i + 1)
            });
            var buttonCall = Ti.UI.createButton({
                right: 160,
                height: 30,
                width: 40,
                backgroundImage: "/imagesForAllPlatforms/appicon.png",
                title: "Anrufen",
                touchEnabled: true
            });
            var buttonNav = Ti.UI.createButton({
                right: 110,
                height: 30,
                width: 40,
                backgroundImage: "/imagesForAllPlatforms/appicon.png",
                title: "Karte"
            });
            var buttonEMail = Ti.UI.createButton({
                right: 60,
                height: 30,
                width: 40,
                backgroundImage: "/imagesForAllPlatforms/appicon.png",
                title: "eMail"
            });
            var buttonAdditional = Ti.UI.createButton({
                right: 10,
                height: 30,
                width: 40,
                backgroundImage: "/imagesForAllPlatforms/appicon.png",
                title: "Weiteres"
            });
            row.add(label);
            row.add(buttonCall);
            row.add(buttonNav);
            row.add(buttonEMail);
            row.add(buttonAdditional);
            tbl_data.push(row);
        }
        var table = Titanium.UI.createTableView({
            data: tbl_data,
            searchbar: searchbar,
            top: 40,
            left: "0%",
            borderColor: "black",
            borderWidth: 0,
            borderRadius: 0,
            headerTitle: "Ergebnisse"
        });
        table.addEventListener("click", function(e) {
            alert("You clicked row " + e.index + " " + e.source.toString());
        });
        $.searchViewId.add(table);
    }
    function showStockList(stock) {
        showTestLayout();
        return;
    }
    function getShareListAsynchronousAndShowIt(searchTerm) {
        showStockList(getStockModelFromWebserviceContent('"AAPL","Apple Inc.","540.98"'));
        return;
    }
    function getStockModelFromWebserviceContent(webserviceContent) {
        var field = webserviceContent.split(",");
        var stock = Alloy.createModel("stock", {
            sign: field[0].replace('"', "").replace('"', ""),
            stockName: field[1].replace('"', "").replace('"', ""),
            price: field[2].replace('"', "").replace('"', "")
        });
        return stock;
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