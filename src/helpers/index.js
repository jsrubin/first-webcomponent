const getGeoLocation = callback => {
  navigator.geolocation.getCurrentPosition(function (position) {
    let lat = position.coords.latitude.toFixed(7);
    let long = position.coords.longitude.toFixed(7);
    callback({ latitude: lat, longitude: long });
  });
};

export { getGeoLocation };
