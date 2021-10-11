const template = document.createElement("template");

template.innerHTML = `
  <div class="card">
    <div class="card-body"></div>
  </div>
`;

class WeatherCard extends HTMLElement {
  constructor() {
    super();
    this._shadowRoot = this.attachShadow({ mode: "open" });
    this._shadowRoot.appendChild(template.content.cloneNode(true));
  }

  get longitude() {
    return this.getAttribute("longitude");
  }

  get latitude() {
    return this.getAttribute("latitude");
  }

  connectedCallback() {
    var xmlHttp = new XMLHttpRequest();
    const url = `http://api.openweathermap.org/data/2.5/weather?lat=${this.latitude}&lon=${this.longitude}&units=imperial&appid=808e91bd7c85ada750d03d821dd80ad4`;
    xmlHttp.open("GET", url, false);
    xmlHttp.send(null);
    this.$card = this._shadowRoot.querySelector(".card-body");
    let responseObj = JSON.parse(xmlHttp.responseText);
    let $townName = document.createElement("p");
    $townName.innerHTML = `${responseObj.name}`;
    this._shadowRoot.appendChild($townName);
    let $temperature = document.createElement("p");
    $temperature.innerHTML = `${parseInt(responseObj.main.temp)} &deg;F`;
    this._shadowRoot.appendChild($temperature);
  }
}

window.customElements.define("weather-card", WeatherCard);
