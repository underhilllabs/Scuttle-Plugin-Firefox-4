var scuttle_version  = "0.3.1";
var scuttle_page_my  = "login.php";
var scuttle_page_add = "bookmarks.php";

var prefs = Components.classes["@mozilla.org/preferences-service;1"].getService(Components.interfaces.nsIPrefBranch);

function scuttle_my(e, mouse) {
   var scuttle_url = prefs.getCharPref("scuttle.options.url");
   var url = scuttle_url + scuttle_page_my;
   if (mouse) {
      if (e.button == 1) {
         var browser = document.getElementById("content");
         var tab = browser.addTab(url);
         browser.selectedTab = tab;
      }
   } else {
      if (e.ctrlKey) {
         var browser = document.getElementById("content");
         var tab = browser.addTab(url);
         browser.selectedTab = tab;
      } else if (e.shiftKey) {
         window.open(url, "scuttleMy");
      } else {
         loadURI(url);
      }
   }
}

function scuttle_add(address, title) {
    var scuttle_url = prefs.getCharPref("scuttle.options.url");
    var scuttle_width = prefs.getCharPref("scuttle.options.width");
    var scuttle_height = prefs.getCharPref("scuttle.options.height");

    var _address = (address === undefined) ? window.content.location.href : address;
    var _title = (title === undefined) ? window.content.document.title : title;
    var focusedWindow = document.commandDispatcher.focusedWindow;
    var description = focusedWindow.getSelection().toString();

    description = description.replace(/[\t\n\r\f\v]+/g, " ");
    description = description.replace(/ {2,}/g, " ");

    var a = encodeURIComponent(_address);
    var t = encodeURIComponent(_title);
    var d = encodeURIComponent(description);

    var scuttle_add_window = window.open(scuttle_url + scuttle_page_add + "?action=add&popup=1&address="+ a +"&title="+ t +"&description="+ d +"&src=ffext"+ scuttle_version, "scuttleBookmark", "status=0, scrollbars=1, toolbar=0, resizable=1, width="+ scuttle_width +", height="+ scuttle_height +", left="+ (screen.width-scuttle_width) / 2 +", top="+ (screen.height-scuttle_height) / 2);
}

function scuttle_menu() {
    document.getElementById("scuttle-context-page").setAttribute("hidden", document.getElementById("context-bookmarkpage").getAttribute("hidden"));
    document.getElementById("scuttle-context-link").setAttribute("hidden", document.getElementById("context-bookmarklink").getAttribute("hidden"));
    document.getElementById("scuttle-context-selection").setAttribute("hidden", document.getElementById("context-searchselect").getAttribute("hidden"));
}