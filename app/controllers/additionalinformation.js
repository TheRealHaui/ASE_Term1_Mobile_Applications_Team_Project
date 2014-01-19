var args = arguments[0] || {};

/* no close button for iOS as described in   http://docs.appcelerator.com/titanium/3.0/#!/guide/Alloy_Controllers
 * because iOS is not a targed
 */

// initialize the labels
$.lblFirstname.text = args.get("firstname") || '';
$.lblLastname.text = args.get("lastname") || '';
$.lblAddress.text = args.get("address") || '';
$.lblEmail.text = args.get("emailAddress") || '';
$.lblTelefonNo.text = args.get("telephonNumber") || '';

var MapModule = require('ti.map');

var personlatitude = 47.213243;
var personlongitude = 14.830806;

var personlocation = MapModule.createAnnotation({ 
    latitude: personlatitude,
    longitude: personlongitude,
    pincolor: MapModule.ANNOTATION_RED,  
    title: args.get("lastname")
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