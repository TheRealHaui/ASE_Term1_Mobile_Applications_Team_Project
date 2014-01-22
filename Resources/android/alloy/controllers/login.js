function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "login";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.loginWindowId = Ti.UI.createWindow({
        id: "loginWindowId",
        title: "Details",
        backgroundColor: "white",
        exitOnClose: "true",
        fullscreen: "false",
        layout: "vertical"
    });
    $.__views.loginWindowId && $.addTopLevelView($.__views.loginWindowId);
    $.__views.scrollView = Ti.UI.createScrollView({
        id: "scrollView",
        showVerticalScrollIndicator: "true",
        showHorizontalScrollIndicator: "false",
        scrollType: "vertical",
        layout: "vertical",
        height: "90%",
        width: "90%"
    });
    $.__views.loginWindowId.add($.__views.scrollView);
    $.__views.lblFirstname = Ti.UI.createLabel({
        id: "lblFirstname"
    });
    $.__views.scrollView.add($.__views.lblFirstname);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;