var successCa11back = (position) => {
    console.log(position);

    var accuracy = position.coords.accuracy;
    var altitude = position.coords.altitude;
    var altitudeaccuracy = position.coords.altitudeaccuracy;
    var heading = position.coords.heading;
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;
    var speed = position.coords.speed;




async function insertLocation() {

    var jsonData = {
        "accuracy": accuracy,
        "altitude": altitude,
        "altitudeaccuracy": altitudeaccuracy,
        "heading": heading,
        "latitude": latitude,
        "longitude": longitude,
        "speed": speed

    }
    console.log("before", JSON.stringify(jsonData));

    fetch("https://cerbosys.in:5900/location/insertLocation",
        {
           
            method: "POST",
            headers: {
                
                
                "Content-type": "application/json; charset=UTF-8",                
            },
            body: jsonData,
           
        })
        .then((res) => {
            console.log(res);
            console.log("After", res.json);
        })
        .catch((err) => {
            console.log(err);
        })

};

    insertLocation();
};









var errorCa11back = (error) => {
    console.error(error);
};

var watchld = navigator.geolocation.watchPosition(successCa11back, errorCa11back);
navigator.geolocation.clearWatch(watchId);