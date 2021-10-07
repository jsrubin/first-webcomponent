import { useState } from "react";
import "./App.css";
//import our Web Component
import "./web-components/search-result";

function App() {
  const [name, setName] = useState("");

  return (
    <div className="App">
      <header className="App-header">
        <input
          placeholder="Enter your name"
          onChange={event => setName(event.target.value)}
          value={name}
        ></input>

        <div class="greeting">Hello {name}!</div>

        <search-result name-attribute={name}></search-result>
      </header>
    </div>
  );
}

export default App;
