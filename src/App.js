import { useState, useEffect } from "react";
import "./App.css";
//import our Web Component
import "./web-components/search-result";
import "./web-components/weather-card";

const Loading = () => {
  return <div className="loader"></div>;
};

const getGeoLocation = callback => {
  navigator.geolocation.getCurrentPosition(function (position) {
    let lat = position.coords.latitude.toFixed(7);
    let long = position.coords.longitude.toFixed(7);
    callback({ latitude: lat, longitude: long });
  });
};

function App() {
  const [name, setName] = useState("");
  const [geolocation, setGeolocation] = useState("");

  useEffect(() => {
    getGeoLocation(setGeolocation);
  }, []);

  useEffect(() => {
    if (geolocation && geolocation.latitude) {
      console.log(
        ` did we find lat long?? ${geolocation.latitude} ${geolocation.longitude}`
      );
    }
  }, [geolocation]);

  return (
    <div className="App">
      <header className="App-header">
        {geolocation && geolocation.latitude && geolocation.longitude ? (
          <weather-card
            latitude={geolocation.latitude || ""}
            longitude={geolocation.longitude || ""}
          ></weather-card>
        ) : (
          <>
            <Loading></Loading>
            <p />
          </>
        )}
        <input
          placeholder="Enter your name"
          onChange={event => setName(event.target.value)}
          value={name}
        ></input>

        <div className="greeting">Hello {name}!</div>

        <search-result name-attribute={name}></search-result>
      </header>
    </div>
  );
}

export default App;
