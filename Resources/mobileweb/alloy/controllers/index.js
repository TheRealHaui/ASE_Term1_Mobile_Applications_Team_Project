function Controller() {
    function doSearchButtonClick() {
        var searchFieldValue = $.searchFieldId.value;
        if ("" == searchFieldValue || searchFieldValue == initialSearchFieldTextValue) {
            alert("Sie müssen mindestens einen Buchstaben zur Suche eingeben");
            $.searchFieldId.focus();
            return;
        }
        alert("clicked todo");
    }
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