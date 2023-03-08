/*******navigator******/

let language = navigator.language || navigator.userLanguage;
let navigatorName = navigator.appName;
let NavigatorVersion = navigator.appVersion;
let engine = navigator.product;
let cookieAccept = navigator.cookieEnabled;

let browser = {
    language,
    navigatorName,
    NavigatorVersion,
    engine,
    cookieAccept
}

console.log(browser);

/*******localisation*********/

let localisation = navigator.geolocation;

(function(){
    if(localisation){
        localisation.getCurrentPosition(position);
    }
    else{
        console.log("Geolocation is not supported by this browser.");
    }
})();

function position(x){
    let latitude = x.coords.latitude;
    let longitude = x.coords.longitude;
    let altitude = x.coords.altitude;
    let accuracy = x.coords.accuracy;
    let altitudeAccuracy = x.coords.altitudeAccuracy;
    let heading = x.coords.heading;
    let speed = x.coords.speed;
    let timestamp = x.timestamp;
    console.log(latitude, longitude, altitude, accuracy, altitudeAccuracy, heading, speed, timestamp);
}

/*******Location*********/

let url = location.href;
let domain = location.hostname;
let pathname = location.pathname;
let search = location.search;
let hash = location.hash;
let origin = location.origin;
let protocol = location.protocol;
let username = location.username;
let password = location.password;
let host = location.host;
let hostname = location.hostname;
let port = location.port;

let loc = {
    url,
    domain,
    pathname,
    search,
    hash,
    origin,
    protocol,
    username,
    password,
    host,
    hostname,
    port
}

console.log(loc)

/********history*******/

let histories = history.length;

console.log(histories);