exports.definition = {
    config: {
        columns: {
<<<<<<< HEAD
            sign: "string",
            stockName: "string",
            currentPrice: "decimal"
=======
            id: "decimal",
            firstname: "string",
            lastname: "string",
            address: "string",
            emailAddress: "string",
            telephonNumber: "string"
>>>>>>> b7fc47ab5e47c8c00fe77bca7c793bf9f4659821
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

model = Alloy.M("Person", exports.definition, []);

collection = Alloy.C("Person", exports.definition, model);

exports.Model = model;

exports.Collection = collection;