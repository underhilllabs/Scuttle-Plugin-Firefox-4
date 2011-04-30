var scuttle_url_default = "http://scuttle.org/";
var scuttle_width_default = "730";
var scuttle_height_default = "465";

var scuttle_url;
var scuttle_width;
var scuttle_height;

var prefs = Components.classes["@mozilla.org/preferences-service;1"].getService(Components.interfaces.nsIPrefBranch);

function options_load() {
    try {
        scuttle_url = document.getElementById("scuttle-url");
        scuttle_url.value = prefs.getCharPref("scuttle.options.url");

        scuttle_width = document.getElementById("scuttle-width");
        scuttle_width.value = prefs.getCharPref("scuttle.options.width");

        scuttle_height = document.getElementById("scuttle-height");
        scuttle_height.value = prefs.getCharPref("scuttle.options.height");
    }
    catch(e) {
        scuttle_url.value = scuttle_url_default;
        scuttle_width.value = scuttle_width_default;
        scuttle_height.value = scuttle_height_default;
    }
}

function options_accept() {
    var url = scuttle_url.value;
    if ((url.length > 0) && (url.charAt(url.length - 1) != "/")) {
        url = url + "/";
    }

    prefs.setCharPref("scuttle.options.url", url);
    prefs.setCharPref("scuttle.options.width", scuttle_width.value);
    prefs.setCharPref("scuttle.options.height", scuttle_height.value);
    return true;
}