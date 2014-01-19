function Controller() {
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
                backgroundImage: "/imagesForAllPlatforms/appicon.png",
                title: "eMail"
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
                console.log("buttonclick Additional");
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
        showPersonList(getPersonModelFromWebserviceContent('"Michael","Mustermann","mm@mail.com", "8010 Graz Hauptstrasse", "066412345678"'));
        return;
    }
    function getPersonModelFromWebserviceContent(webserviceContent) {
        var field = webserviceContent.split(",");
        var person = Alloy.createModel("person", {
            firstName: field[0].replace('"', "").replace('"', ""),
            lastName: field[1].replace('"', "").replace('"', ""),
            emailAddress: field[2].replace('"', "").replace('"', ""),
            address: field[3].replace('"', "").replace('"', ""),
            telephonNumber: field[4].replace('"', "").replace('"', "")
        });
        var library = Alloy.createCollection("person");
        library.add(person);
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
    $.searchFieldId.value = initialSearchFieldTextValue;
    $.mainWindowId.open();
    __defers["$.__views.searchFieldId!return!doSearchButtonClick"] && $.__views.searchFieldId.addEventListener("return", doSearchButtonClick);
    __defers["$.__views.searchFieldId!touchstart!doTouchStart"] && $.__views.searchFieldId.addEventListener("touchstart", doTouchStart);
    __defers["$.__views.button!click!doSearchButtonClick"] && $.__views.button.addEventListener("click", doSearchButtonClick);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;