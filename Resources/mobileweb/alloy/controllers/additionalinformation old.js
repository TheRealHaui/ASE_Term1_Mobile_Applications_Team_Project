function Controller() {
    function createRow(Sku, Name, Qty, Price) {
        var tableRow = Ti.UI.createTableViewRow({
            height: 50
        });
        var skuView = Ti.UI.createView({
            left: 0,
            width: "25%",
            height: Ti.UI.Size,
            backgroundColor: "blue"
        });
        var nameView = Ti.UI.createView({
            left: "25%",
            width: "25%",
            height: Ti.UI.Size,
            backgroundColor: "red"
        });
        var qtyView = Ti.UI.createView({
            left: "50%",
            width: "25%",
            height: Ti.UI.Size,
            backgroundColor: "green"
        });
        var priceView = Ti.UI.createView({
            left: "75%",
            width: "25%",
            height: Ti.UI.Size,
            backgroundColor: "yellow"
        });
        skuView.add(Ti.UI.createLabel({
            top: 5,
            right: 5,
            bottom: 5,
            left: 5,
            text: Sku
        }));
        nameView.add(Ti.UI.createLabel({
            top: 5,
            right: 5,
            bottom: 5,
            left: 5,
            text: Qty
        }));
        qtyView.add(Ti.UI.createLabel({
            top: 5,
            right: 5,
            bottom: 5,
            left: 5,
            text: Name
        }));
        priceView.add(Ti.UI.createLabel({
            top: 5,
            right: 5,
            bottom: 5,
            left: 5,
            text: Price
        }));
        tableRow.add(skuView);
        tableRow.add(nameView);
        tableRow.add(qtyView);
        tableRow.add(priceView);
        skuView = nameView = qtyView = priceView = null;
        return tableRow;
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "additionalinformation old";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    exports.destroy = function() {};
    _.extend($, $.__views);
    var tableData = [];
    tableData.push(createRow("VCF001", "Test product one - this is a really really really really long description.", 4, 2.99));
    tableData.push(createRow("VCF002", "Test product two", 1, 12.99));
    tableData.push(createRow("VCF003", "Test product three", 3, 1.5));
    $.myTable.setData(tableData);
    tableData = null;
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;