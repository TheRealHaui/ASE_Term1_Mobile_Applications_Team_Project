exports.definition = {
    config: {
        columns: {
            sign: "string",
            stockName: "string",
            currentPrice: "decimal"
        }
    },
    extendModel: function(Model) {
        _.extend(Model.prototype, {});
        return Model;
    },
    extendCollection: function(Collection) {
        _.extend(Collection.prototype, {});
        return Collection;
    }
};

var Alloy = require("alloy"), _ = require("alloy/underscore")._, model, collection;

model = Alloy.M("stock", exports.definition, []);

collection = Alloy.C("stock", exports.definition, model);

exports.Model = model;

exports.Collection = collection;