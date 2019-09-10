import React from "react";

import Titles from "./components/Titles.js";

import Form from "./components/Form.js";

import Weather from "./components/Weather.js";

const API_KEY = "2a5fa7c060d77aaf99b056496d191716";

class App extends React.Component{
  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}
    &units=metric`);
    const data = await api_call.json();
    console.log(data);

  }

  render(){
    return (
      <div>
        <Titles />
        <Form getWeather={this.getWeather }/>
      <Weather />
      </div>
    );
  }
};

export default App;