import { useState, useEffect } from "react";
import "./App.css";
import "./web-components/search-result";
import "./web-components/weather-card";
import Loading from "./common/Loader";
import { getGeoLocation } from "./helpers";

function App() {
  const [name, setName] = useState("");
  const [geolocation, setGeolocation] = useState("");

  useEffect(() => {
    getGeoLocation(setGeolocation);
  }, []);

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
