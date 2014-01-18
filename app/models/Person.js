exports.definition = {
     config: {
                columns: {
                    "id": "decimal",
                    "firstname": "string",
                    "lastname": "string",
                    "address": "string",
                    "emailAddress": "string",
                    "telephonNumber": "string"                                                            
                },
                "adapter": {
                    "type": "properties", 
                    "collection_name": "persons"
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