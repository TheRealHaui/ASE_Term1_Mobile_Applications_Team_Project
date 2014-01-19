exports.definition = {
    config: {
        columns: {
            id: "decimal",
            firstname: "string",
            lastname: "string",
            address: "string",
            emailAddress: "string",
            telephonNumber: "string"
        },
        adapter: {
            type: "properties",
            collection_name: "persons"
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