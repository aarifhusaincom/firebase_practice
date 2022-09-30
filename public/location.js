var successCa11back = (position) => {
  console.log(position);

  var accuracys = position.coords.accuracy;
  var altitudes = position.coords.altitude;
  var altitudeaccuracys = position.coords.altitudeaccuracy;
  var headings = position.coords.heading;
  var latitudes = position.coords.latitude;
  var longitudes = position.coords.longitude;
  var speeds = position.coords.speed;

  async function insertLocation() {
    axios
      .post("https://cerbosys.in:5900/location/insertLocation", {
        accuracy: accuracys,
        altitude: altitudes,
        altitudeaccuracy: altitudeaccuracys,
        heading: headings,
        latitude: latitudes,
        longitude: longitudes,
        speed: speeds,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  insertLocation();
};

var errorCa11back = (error) => {
  console.error(error);
};

var watchld = navigator.geolocation.watchPosition(
  successCa11back,
  errorCa11back
);
navigator.geolocation.clearWatch(watchId);
