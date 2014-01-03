function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.myDrawersWin = Ti.UI.createWindow({
        id: "myDrawersWin"
    });
    $.__views.myDrawersWin && $.addTopLevelView($.__views.myDrawersWin);
    $.__views.showMyDrawers = Ti.UI.createButton({
        id: "showMyDrawers",
        title: "Show Drawers"
    });
    $.__views.myDrawersWin.rightNavButton = $.__views.showMyDrawers;
    $.__views.placeListTable = Ti.UI.createTableView({
        id: "placeListTable"
    });
    $.__views.myDrawersWin.add($.__views.placeListTable);
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.index.open();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;