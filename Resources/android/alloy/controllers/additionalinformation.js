function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "additionalinformation";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.additionalinformation = Ti.UI.createWindow({
        id: "additionalinformation"
    });
    $.__views.additionalinformation && $.addTopLevelView($.__views.additionalinformation);
    $.__views.__alloyId0 = Ti.UI.createView({
        id: "__alloyId0"
    });
    $.__views.additionalinformation.add($.__views.__alloyId0);
    $.__views.thelabel = Ti.UI.createLabel({
        text: "I am the new window",
        id: "thelabel"
    });
    $.__views.__alloyId0.add($.__views.thelabel);
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;