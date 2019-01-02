function changeLanguage() {
    var currentLanguage = document.getElementById("lang_toggle").getAttribute("lang");
    if (currentLanguage == "en") {
        document.getElementById("lang_toggle").innerHTML = "<i class=\"fa fa-globe-americas\"></i> View English version";
        document.getElementById("lang_toggle").setAttribute("lang", "ja");
        document.styleSheets[0].disabled = false;
        document.styleSheets[1].disabled = true;
    }
    else {
        document.getElementById("lang_toggle").innerHTML = "<i class=\"fa fa-globe-asia\"></i> 日本語版を見る";
        document.getElementById("lang_toggle").setAttribute("lang", "en");
        document.styleSheets[0].disabled = true;
        document.styleSheets[1].disabled = false;
    }
}
