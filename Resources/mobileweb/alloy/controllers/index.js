function Controller() {
    function checkPw(username, password) {
        console.log("Username:" + username);
        console.log("password:" + password);
        var usern = username.trim();
        var passw = password.trim();
        var file = Titanium.Filesystem.getFile(Titanium.Filesystem.resourcesDirectory, "password.txt");
        if (file.exists()) {
            var resources = file.read().text.split("\n");
            for (var i = 0; resources.length > i; i++) {
                var data = resources[i].split(" ");
                var user = data[0].trim();
                var pw = data[1].trim();
                if (usern == user && passw == pw) return true;
            }
        }
        return false;
    }
    function startAccelerator() {
        "Simulator" === Ti.Platform.model || -1 !== Ti.Platform.model.indexOf("sdk") ? alert("Accelerometer does not work on a virtual device") : Ti.Accelerometer.addEventListener("update", accelerometerCallback);
    }
    function doSearchButtonClick() {
        var searchFieldValue = $.searchFieldId.value;
        if ("" == searchFieldValue || searchFieldValue == initialSearchFieldTextValue) {
            alert("Sie müssen mindestens einen Buchstaben zur Suche eingeben");
            $.searchFieldId.focus();
            return;
        }
        getShareListAsynchronousAndShowIt(searchFieldValue);
        $.searchFieldId.focus();
    }
    function doTouchStart() {
        $.searchFieldId.value == initialSearchFieldTextValue && ($.searchFieldId.value = "");
    }
    function resultListButtonClicked(e) {
        if ("[object TiUIButton]" == e.source.toString()) {
            var win = Alloy.createController("test").getView();
            win.open();
        }
    }
    function showTestLayout(persons) {
        var tbl_data = [];
        var searchbar;
        for (var i = 0; persons.length > i; i++) {
            console.log("i:" + i);
            var person = persons.at(i);
            console.log(person.get("firstName"));
            var row = Ti.UI.createTableViewRow();
            var label = Ti.UI.createLabel({
                left: 10,
                text: person.get("firstName") + " " + person.get("lastName")
            });
            var buttonCall = Ti.UI.createButton({
                right: 160,
                height: 30,
                width: 40,
                backgroundImage: "/imagesForAllPlatforms/telefonhoerer.png",
                title: "Call",
                touchEnabled: true
            });
            var buttonNav = Ti.UI.createButton({
                right: 110,
                height: 30,
                width: 40,
                backgroundImage: "/imagesForAllPlatforms/map.png"
            });
            var buttonEMail = Ti.UI.createButton({
                right: 60,
                height: 30,
                width: 40,
                backgroundImage: "/imagesForAllPlatforms/email.png"
            });
            var buttonAdditional = Ti.UI.createButton({
                right: 10,
                height: 30,
                width: 40,
                backgroundImage: "/imagesForAllPlatforms/appicon.png",
                title: "Weiteres"
            });
            row.add(label);
            buttonCall.addEventListener("click", function() {
                console.log(person.get("telephonNumber"));
                Titanium.Platform.openURL("tel:" + person.get("telephonNumber"));
            });
            buttonAdditional.addEventListener("click", function() {
                var win = Alloy.createController("additionalinformation", person).getView();
                win.open();
                console.log("buttonclick Additional");
            });
            buttonEMail.addEventListener("click", function() {
                var emailDialog = Ti.UI.createEmailDialog();
                emailDialog.subject = "Hello from Titanium";
                emailDialog.toRecipients = [ person.get("emailAddress") ];
                emailDialog.messageBody = "Appcelerator Titanium Sucks!";
                emailDialog.open();
            });
            row.add(buttonCall);
            row.add(buttonNav);
            row.add(buttonEMail);
            row.add(buttonAdditional);
            tbl_data.push(row);
        }
        var table = Titanium.UI.createTableView({
            id: "resultTableViewId",
            data: tbl_data,
            searchbar: searchbar,
            top: 40,
            left: "0%",
            borderColor: "black",
            borderWidth: 0,
            borderRadius: 0,
            headerTitle: "Ergebnisse"
        });
        table.addEventListener("click", resultListButtonClicked);
        var viewChildren = $.searchViewId.getChildren();
        for (var i = 0; viewChildren.length > i; i++) if ("resultTableViewId" == viewChildren[i].id) {
            $.searchViewId.remove(viewChildren[i]);
            break;
        }
        $.searchViewId.add(table);
    }
    function showNoResultLayout() {
        var tbl_data = [];
        var searchbar;
        var row = Ti.UI.createTableViewRow();
        var label = Ti.UI.createLabel({
            left: 10,
            text: "Es wurde leider keine Ergebnisse gefunden"
        });
        row.add(label);
        tbl_data.push(row);
        var table = Titanium.UI.createTableView({
            id: "resultTableViewId",
            data: tbl_data,
            searchbar: searchbar,
            top: 40,
            left: "0%",
            borderColor: "black",
            borderWidth: 0,
            borderRadius: 0,
            headerTitle: "Ergebnisse"
        });
        $.searchViewId.add(table);
    }
    function showPersonList(persons) {
        null == persons || 0 === persons.length ? showNoResultLayout() : showTestLayout(persons);
        return;
    }
    function getShareListAsynchronousAndShowIt(searchTerm) {
        var content = '[{"address":"asdf","emailAddress":"asdf","firstname":"asdf","id":1,"lastname":"asdf","telephonNumber":"asdf","version":0},{"address":"Allestrasse 12, 8010 Graz, Austria","emailAddress":"h.s@bekiffter.org","firstname":"Hans","id":2,"lastname":"Söllner","telephonNumber":"113 21423","version":0},{"address":"Grazer Straße 12, 8010 Graz, Austria","emailAddress":"m.kronberger@hotmail.com","firstname":"Michael","id":3,"lastname":"Kronberger","telephonNumber":"234 234 234","version":0},{"address":"Nirgendwo in Austria","emailAddress":"blabla@nirgendwo.at","firstname":"Bernhard","id":4,"lastname":"Eibegger","telephonNumber":"0664 1234567","version":0},{"address":"a","emailAddress":"a","firstname":"a","id":5,"lastname":"a","telephonNumber":"1","version":0}]';
        showPersonList(getPersonModelFromWebserviceContent(content));
        return;
    }
    function getPersonModelFromWebserviceContent(webserviceContent) {
        webserviceContent.split(",");
        var json = JSON.parse(webserviceContent);
        var library = Alloy.createCollection("person");
        for (i = 0; json.length > i; i++) {
            var person = Alloy.createModel("person", {
                firstName: json[i].firstname,
                lastName: json[i].lastname,
                emailAddress: json[i].emailAddress,
                address: json[i].address,
                telephonNumber: json[i].telephonNumber
            });
            library.add(person);
        }
        console.log(library.length);
        return library;
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.mainWindowId = Ti.UI.createWindow({
        id: "mainWindowId",
        title: "Personen suchen",
        fullscreen: "true",
        backgroundColor: "white"
    });
    $.__views.mainWindowId && $.addTopLevelView($.__views.mainWindowId);
    $.__views.searchViewId = Ti.UI.createView({
        id: "searchViewId",
        top: "2%",
        left: "2%",
        right: "2%"
    });
    $.__views.mainWindowId.add($.__views.searchViewId);
    $.__views.searchFieldId = Ti.UI.createTextField({
        borderStyle: Ti.UI.INPUT_BORDERSTYLE_BEZEL,
        keyboardToolbarColor: "#999",
        keyboardToolbarHeight: "40",
        top: "0%",
        left: "0%",
        width: "66%",
        value: "Personen suchen",
        id: "searchFieldId"
    });
    $.__views.searchViewId.add($.__views.searchFieldId);
    doSearchButtonClick ? $.__views.searchFieldId.addEventListener("return", doSearchButtonClick) : __defers["$.__views.searchFieldId!return!doSearchButtonClick"] = true;
    doTouchStart ? $.__views.searchFieldId.addEventListener("touchstart", doTouchStart) : __defers["$.__views.searchFieldId!touchstart!doTouchStart"] = true;
    $.__views.button = Ti.UI.createButton({
        id: "button",
        top: "0%",
        left: "70%",
        width: "30%",
        title: "Suchen"
    });
    $.__views.searchViewId.add($.__views.button);
    doSearchButtonClick ? $.__views.button.addEventListener("click", doSearchButtonClick) : __defers["$.__views.button!click!doSearchButtonClick"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    var initialSearchFieldTextValue = "Personen suchen";
    console.log("start");
    $.searchFieldId.value = initialSearchFieldTextValue;
    var win = Titanium.UI.createWindow({
        title: "Login",
        backgroundColor: "white"
    });
    var username = Titanium.UI.createTextField({
        borderStyle: Titanium.UI.INPUT_BORDERSTYLE_BEZEL,
        hintText: "Username",
        color: "black",
        keyboardToolbarColor: "#999",
        keyboardToolbarHeight: 40,
        top: 100,
        width: 300,
        height: Ti.UI.SIZE
    });
    var label1 = Ti.UI.createLabel({
        color: "#900",
        font: {
            fontSize: 48
        },
        text: "Login",
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        top: 30,
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE
    });
    var label2 = Ti.UI.createLabel({
        color: "#900",
        font: {
            fontSize: 48
        },
        text: "Password",
        textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
        top: 140,
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE
    });
    var password = Titanium.UI.createTextField({
        borderStyle: Titanium.UI.INPUT_BORDERSTYLE_BEZEL,
        hintText: "Password",
        color: "black",
        keyboardToolbarColor: "#999",
        keyboardToolbarHeight: 40,
        top: 210,
        width: 300,
        height: Ti.UI.SIZE
    });
    var loginButton = Titanium.UI.createButton({
        title: "Login",
        top: 270,
        width: 100,
        height: 50
    });
    loginButton.addEventListener("click", function() {
        Titanium.API.info("You clicked the button");
        console.log("Clicked button");
        if ("" == username.value || "Username" === username.value) {
            alert("Please enter a Username");
            return;
        }
        if ("" == password.value || "Password" === password.value) {
            alert("Please enter a Password");
            return;
        }
        if (checkPw(username.value, password.value)) {
            $.mainWindowId.open();
            Ti.Media.vibrate([ 0, 500 ]);
            startAccelerator();
        } else alert("Username/Password is not valid");
    });
    win.add(label1);
    win.add(username);
    win.add(label2);
    win.add(password);
    win.add(loginButton);
    win.open();
    console.log("nach open");
    var offset = 100;
    var lastTime = new Date().getTime();
    var filter = 1;
    var last_x = 0;
    var accelerometerCallback = function(e) {
        var now = new Date().getTime();
        if (now > lastTime + offset) {
            if (last_x > e.x + 5) {
                last_x = e.x * filter + last_x * (1 - filter);
                $.searchFieldId.value = initialSearchFieldTextValue;
            } else last_x = e.x * filter + last_x * (1 - filter);
            lastTime = now;
        }
    };
    __defers["$.__views.searchFieldId!return!doSearchButtonClick"] && $.__views.searchFieldId.addEventListener("return", doSearchButtonClick);
    __defers["$.__views.searchFieldId!touchstart!doTouchStart"] && $.__views.searchFieldId.addEventListener("touchstart", doTouchStart);
    __defers["$.__views.button!click!doSearchButtonClick"] && $.__views.button.addEventListener("click", doSearchButtonClick);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;