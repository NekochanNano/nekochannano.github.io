function changeLanguage() {
    var currentLanguage = document.getElementById("lang_toggle").getAttribute("lang");
    if (currentLanguage == "en") {
        document.getElementById("lang_toggle").innerHTML = "<i class=\"fa fa-globe-americas\"></i> View English version";
        document.getElementById("lang_toggle").setAttribute("lang", "ja");
        document.getElementById("lang_control").setAttribute("href", "/css/lang_ja.css");
    }
    else {
        document.getElementById("lang_toggle").innerHTML = "<i class=\"fa fa-globe-asia\"></i> 日本語版を見る";
        document.getElementById("lang_toggle").setAttribute("lang", "en");
        document.getElementById("lang_control").setAttribute("href", "/css/lang_en.css");
    }
}

window.onload = function() {
    changeLanguage();
    changeLanguage();
}
