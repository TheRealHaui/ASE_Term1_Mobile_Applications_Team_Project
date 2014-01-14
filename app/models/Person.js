exports.definition = {
	config: {
		columns: {
		    "sign": "string",
		    "stockName": "string",
		    "currentPrice": "decimal"
		},
		
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