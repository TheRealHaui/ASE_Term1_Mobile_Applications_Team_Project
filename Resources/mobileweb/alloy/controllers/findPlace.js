function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "findPlace";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.searchContainer = Ti.UI.createView({
        id: "searchContainer"
    });
    $.__views.searchContainer && $.addTopLevelView($.__views.searchContainer);
    $.__views.searchInput = Ti.UI.createTextField({
        id: "searchInput",
        hintText: "Find a place..."
    });
    $.__views.searchContainer.add($.__views.searchInput);
    $.__views.searchResultsTable = Ti.UI.createTableView({
        id: "searchResultsTable"
    });
    $.__views.searchResultsTable && $.addTopLevelView($.__views.searchResultsTable);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;