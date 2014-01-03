function Controller() {
    function doSearchButtonClick() {
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
    $.__views.index = Ti.UI.createWindow({
        fullscreen: "true",
        backgroundColor: "white",
        id: "index"
    });
    $.__views.index && $.addTopLevelView($.__views.index);
    $.__views.searchFieldId = Ti.UI.createTextField({
        borderStyle: Ti.UI.INPUT_BORDERSTYLE_BEZEL,
        keyboardToolbarColor: "#999",
        keyboardToolbarHeight: "40",
        top: "10",
        value: "Aktienkürzel suchen",
        id: "searchFieldId"
    });
    $.__views.index.add($.__views.searchFieldId);
    doSearchFieldFocused ? $.__views.searchFieldId.addEventListener("focus", doSearchFieldFocused) : __defers["$.__views.searchFieldId!focus! doSearchFieldFocused "] = true;
    $.__views.button = Ti.UI.createButton({
        id: "button",
        title: "Hello",
        width: "100",
        height: "50"
    });
    $.__views.index.add($.__views.button);
    doSearchButtonClick ? $.__views.button.addEventListener("click", doSearchButtonClick) : __defers["$.__views.button!click!doSearchButtonClick"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.index.open();
    __defers["$.__views.searchFieldId!focus! doSearchFieldFocused "] && $.__views.searchFieldId.addEventListener("focus", doSearchFieldFocused);
    __defers["$.__views.button!click!doSearchButtonClick"] && $.__views.button.addEventListener("click", doSearchButtonClick);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;