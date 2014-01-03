exports.definition = {
	config: {
		columns: {
		    "sign": "string",
		    "stockName": "string",
		    "currentPrice": "decimal"
		},
		
		//With this lines you are not going to do it again 
		//for mobile web pages.
		//Dirty bloody 
		/**
		adapter: {
			type: "sql",
			collection_name: "Stock"
		}
		**/
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