function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "Vorlagen";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.Vorlagen = Ti.UI.createWindow({
        fullscreen: "true",
        backgroundColor: "white",
        id: "Vorlagen"
    });
    $.__views.Vorlagen && $.addTopLevelView($.__views.Vorlagen);
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;