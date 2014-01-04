function Controller() {
    function doSearchButtonClick() {
        var searchFieldValue = $.searchFieldId.value;
        if ("" == searchFieldValue || searchFieldValue == initialSearchFieldTextValue) {
            alert("Sie müssen mindestens einen Buchstaben zur Suche eingeben");
            $.searchFieldId.focus();
            return;
        }
        var stock = getShareListAsynchronous(searchFieldValue);
        showStockList(stock);
    }
    function getShareListAsynchronous() {
        var f = '"AAPL","Apple Inc.","540.98"';
        var i = f.split(",");
        var stock = Alloy.createModel("stock", {
            sign: i[0].replace('"', "").replace('"', ""),
            stockName: i[1].replace('"', "").replace('"', ""),
            price: i[2].replace('"', "").replace('"', "")
        });
        return stock;
    }
    function showStockList() {}
    function doSearchFieldFocused() {
        $.searchFieldId.value = "";
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
        title: "Aktuelle Aktienkurse",
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
        value: "Aktienkürzel suchen",
        id: "searchFieldId"
    });
    $.__views.searchViewId.add($.__views.searchFieldId);
    doSearchFieldFocused ? $.__views.searchFieldId.addEventListener("focus", doSearchFieldFocused) : __defers["$.__views.searchFieldId!focus! doSearchFieldFocused "] = true;
    $.__views.button = Ti.UI.createButton({
        id: "button",
        top: "0%",
        left: "70%",
        width: "30%",
        title: "Suchen"
    });
    $.__views.searchViewId.add($.__views.button);
    doSearchButtonClick ? $.__views.button.addEventListener("click", doSearchButtonClick) : __defers["$.__views.button!click!doSearchButtonClick"] = true;
    $.__views.row = Ti.UI.createTableViewRow({
        id: "row"
    });
    $.__views.searchViewId.add($.__views.row);
    $.__views.view = Ti.UI.createView({
        id: "view",
        top: "2%",
        backgroundColor: "red",
        height: "20"
    });
    $.__views.row.add($.__views.view);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var initialSearchFieldTextValue = "Aktienkürzel suchen";
    $.searchFieldId.value = initialSearchFieldTextValue;
    $.mainWindowId.open();
    __defers["$.__views.searchFieldId!focus! doSearchFieldFocused "] && $.__views.searchFieldId.addEventListener("focus", doSearchFieldFocused);
    __defers["$.__views.button!click!doSearchButtonClick"] && $.__views.button.addEventListener("click", doSearchButtonClick);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;