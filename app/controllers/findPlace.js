

//var args = arguments[0] || {};



/**
$.searchInput.addEventListener("change", function(){
   if ($.searchInput.value.length > 2 && $.searchInput.value != "Find a place...") {

    // do the search and get a response successfully

            _.each(returnedVenues, function(venue){
                tblData.push(Alloy.createController("venueSearchListItem", venue).getView());
            });

            $.searchResultsTable.setData(tblData);

            $.searchResultsTable.visible = true;

        },
        onerror: function(e){
            console.log("error");
            console.log(e);
        }
    });

    // invoke the HTTP client here

  }
  else {
        $.searchResultsTable.visible = false;
  }
});

**/