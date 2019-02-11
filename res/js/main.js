function changeLanguage() {
    var currentLanguage = document.getElementById("lang_toggle").getAttribute("lang");
    if (currentLanguage == "en") {
        document.getElementById("lang_toggle").setAttribute("lang", "ja");
        document.styleSheets[0].disabled = false;
        document.styleSheets[1].disabled = true;
    }
    else {
        document.getElementById("lang_toggle").setAttribute("lang", "en");
        document.styleSheets[0].disabled = true;
        document.styleSheets[1].disabled = false;
    }
}

//add for get parmeter when page transition occured
function getParam()
{
    var url   = location.href
    parameters    = url.split("?")
    params   = parameters[1].split("&")
    var paramsArray = []
    for ( it = 0; it < params.length; it++ ) {
        neet = params[it].split("=")
        paramsArray.push(neet[0])
        paramsArray[neet[0]] = neet[1]
        }
    var categoryKey = paramsArray["id"]
    return categoryKey
}
