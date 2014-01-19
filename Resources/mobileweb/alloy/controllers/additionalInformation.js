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
    $.__views.__alloyId0 = Ti.UI.createScrollView({
        id: "__alloyId0"
    });
    $.__views.additionalinformation.add($.__views.__alloyId0);
    $.__views.lblFirstname = Ti.UI.createLabel({
        id: "lblFirstname"
    });
    $.__views.__alloyId0.add($.__views.lblFirstname);
    $.__views.lblLastname = Ti.UI.createLabel({
        id: "lblLastname"
    });
    $.__views.__alloyId0.add($.__views.lblLastname);
    $.__views.lblAddress = Ti.UI.createLabel({
        id: "lblAddress"
    });
    $.__views.__alloyId0.add($.__views.lblAddress);
    $.__views.lblEmail = Ti.UI.createLabel({
        id: "lblEmail"
    });
    $.__views.__alloyId0.add($.__views.lblEmail);
    $.__views.lblTelefonNo = Ti.UI.createLabel({
        id: "lblTelefonNo"
    });
    $.__views.__alloyId0.add($.__views.lblTelefonNo);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    $.lblFirstname.text = args.firstname || "";
    $.lblLastname.text = args.lastname || "";
    $.lblAddress.text = args.address || "";
    $.lblEmail.text = args.emailAddress || "";
    $.lblTelefonNo.text = args.telephonNumber || "";
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;