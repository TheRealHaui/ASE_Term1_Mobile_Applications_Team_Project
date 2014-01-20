function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "additionalinformation";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.win2 = Ti.UI.createWindow({
        id: "win2",
        backgroundColor: "white",
        exitOnClose: "false",
        fullscreen: "false",
        title: "Details",
        layout: "vertical"
    });
    $.__views.win2 && $.addTopLevelView($.__views.win2);
    $.__views.scrollView = Ti.UI.createScrollView({
        id: "scrollView",
        showVerticalScrollIndicator: "true",
        showHorizontalScrollIndicator: "false",
        scrollType: "vertical",
        layout: "vertical",
        height: "90%",
        width: "90%"
    });
    $.__views.win2.add($.__views.scrollView);
    $.__views.lblFirstname = Ti.UI.createLabel({
        top: 10,
        left: "20dp",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#0f0",
        font: {
            fontFamily: "Helvetica",
            fontSize: "16dp",
            fontStyle: "normal",
            fontWeight: "normal"
        },
        id: "lblFirstname"
    });
    $.__views.scrollView.add($.__views.lblFirstname);
    $.__views.lblLastname = Ti.UI.createLabel({
        top: 10,
        left: "20dp",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#0f0",
        font: {
            fontFamily: "Helvetica",
            fontSize: "16dp",
            fontStyle: "normal",
            fontWeight: "normal"
        },
        id: "lblLastname"
    });
    $.__views.scrollView.add($.__views.lblLastname);
    $.__views.lblAddress = Ti.UI.createLabel({
        top: 10,
        left: "20dp",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#0f0",
        font: {
            fontFamily: "Helvetica",
            fontSize: "16dp",
            fontStyle: "normal",
            fontWeight: "normal"
        },
        id: "lblAddress"
    });
    $.__views.scrollView.add($.__views.lblAddress);
    $.__views.lblEmail = Ti.UI.createLabel({
        top: 10,
        left: "20dp",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#0f0",
        font: {
            fontFamily: "Helvetica",
            fontSize: "16dp",
            fontStyle: "normal",
            fontWeight: "normal"
        },
        id: "lblEmail"
    });
    $.__views.scrollView.add($.__views.lblEmail);
    $.__views.lblTelefonNo = Ti.UI.createLabel({
        top: 10,
        left: "20dp",
        textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#0f0",
        font: {
            fontFamily: "Helvetica",
            fontSize: "16dp",
            fontStyle: "normal",
            fontWeight: "normal"
        },
        id: "lblTelefonNo"
    });
    $.__views.scrollView.add($.__views.lblTelefonNo);
    $.__views.mapview = Ti.UI.createView({
        id: "mapview"
    });
    $.__views.scrollView.add($.__views.mapview);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    $.lblFirstname.text = args.get("firstName") || "";
    $.lblLastname.text = args.get("lastName") || "";
    $.lblAddress.text = args.get("address") || "";
    $.lblEmail.text = args.get("emailAddress") || "";
    $.lblTelefonNo.text = args.get("telephonNumber") || "";
    Titanium.Geolocation.forwardGeocoder(args.get("address"), function(evt) {
        var MapModule = require("ti.map");
        var personlatitude = 0;
        var personlongitude = 0;
        personlatitude = null == evt.latitude ? 47.213243 : evt.latitude;
        personlongitude = null == evt.longitude ? 14.830806 : evt.longitude;
        var personlocation = MapModule.createAnnotation({
            latitude: personlatitude,
            longitude: personlongitude,
            pincolor: MapModule.ANNOTATION_RED,
            title: args.get("lastName")
        });
        var mv = MapModule.createView({
            mapType: MapModule.NORMAL_TYPE,
            region: {
                latitude: personlatitude,
                longitude: personlongitude,
                latitudeDelta: .02,
                longitudeDelta: .02
            },
            animate: true,
            regionFit: true,
            userLocation: true,
            annotations: [ personlocation ]
        });
        $.mapview.add(mv);
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;