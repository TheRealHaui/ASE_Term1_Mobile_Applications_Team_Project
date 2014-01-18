exports.definition = {
	
/* Example response from webservice.
 * 
 * [{"address":"Allestrasse 12, 8010 Graz, Austria","emailAddress":"h.s@bekiffter.org","firstname":"Hans","id":2,"lastname":"Söllner","telephonNumber":"113 21423","version":0}]
 * 
 */	
	
	config: {
		columns: {
		    "id": "decimal",
		    "firstname": "string",
		    "lastname": "string",
		    "address": "string",
		    "emailAddress": "string",
		    "telephonNumber": "string"		    		    		    
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