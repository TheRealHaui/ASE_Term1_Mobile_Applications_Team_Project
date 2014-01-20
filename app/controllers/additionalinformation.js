var args = arguments[0] || {};

/* no close button for iOS as described in   http://docs.appcelerator.com/titanium/3.0/#!/guide/Alloy_Controllers
 * because iOS is not a targed
 */

// initialize the labels
$.lblFirstname.text = args.get("firstName") || '';
$.lblLastname.text = args.get("lastName") || '';
$.lblAddress.text = args.get("address") || '';
$.lblEmail.text = args.get("emailAddress") || '';
$.lblTelefonNo.text = args.get("telephonNumber") || '';


Titanium.Geolocation.forwardGeocoder(args.get("address"),function(evt){
	var MapModule = require('ti.map');
	var personlatitude = 0.0;
	var personlongitude = 0.0;
	
	if(evt.latitude == null){
		personlatitude = 47.213243;	
	}
	else{
		personlatitude = evt.latitude;	
	}
	
	if(evt.longitude == null){
		personlongitude = 14.830806;	
	}
	else{
		personlongitude = evt.longitude;
	}
	
	var personlocation = MapModule.createAnnotation({ 
	    latitude: personlatitude,
	    longitude: personlongitude,
	    pincolor: MapModule.ANNOTATION_RED,  
	    title: args.get("lastName")
	});	
	
	var mv = MapModule.createView({
	    mapType: MapModule.NORMAL_TYPE,
	    region: {latitude:personlatitude, longitude:personlongitude, latitudeDelta:0.02, longitudeDelta:0.02},
	    animate:true,
	    regionFit:true,
	    userLocation:true,
	    annotations:[personlocation]
	});
	
	$.mapview.add(mv);		
});

/*
personlocation = MapModule.createAnnotation({ 
	    latitude: personlatitude,
	    longitude: personlongitude,
	    pincolor: MapModule.ANNOTATION_GREEN,  
	    title: args.get("lastName")
	});

*/

