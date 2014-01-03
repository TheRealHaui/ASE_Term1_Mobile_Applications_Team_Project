exports.definition = {
	config: {
		columns: {
		    "sign": "string",
		    "stockName": "string",
		    "currentPrice": "decimal"
		},
		adapter: {
			type: "sql",
			collection_name: "Stock"
		}
	},
	extendModel: function(Model) {
		_.extend(Model.prototype, {
			// extended functions and properties go here
		});

		return Model;
	},
	extendCollection: function(Collection) {
		_.extend(Collection.prototype, {
			// extended functions and properties go here
		});

		return Collection;
	}
};

var Alloy = require('alloy'),
    _ = require("alloy/underscore")._,
	model, collection;

model = Alloy.M('Stock',
	 exports.definition,
	[]
);

collection = Alloy.C('Stock',
	 exports.definition,
	 model
);

exports.Model = model;
exports.Collection = collection;