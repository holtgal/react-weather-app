import React from "react";

import Titles from "./components/Titles.js";

import Form from "./components/Form.js";

import Weather from "./components/Weather.js";


// const API_KEY = "2a5fa7c060d77aaf99b056496d191716";

class App extends React.Component{
  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humdity: undefined,
    description: undefined,
    error: undefined
  }
  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=2a5fa7c060d77aaf99b056496d191716`);
    const data = await api_call.json();
    if (city && country) {
      console.log(data);
      this.setState({
        temperature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humdity: data.main.humdity,
        description: data.weather[0].description,
        error: ""
  
      });
    } else {
      this.setState({
        temperature: undefined,
        city: undefined,
        country: undefined,
        humdity: undefined,
        description: undefined,
        error: "Please enter the value."
  
      });

    }

  }

  render(){
    return (
      <div>
        <Titles />
        <Form getWeather={this.getWeather }/>
      <Weather  
        temperature={this.state.temperature} 
        city={this.state.city}
        country={this.state.country}
        humdity={this.state.humdity}
        description={this.state.description}
        error={this.state.error}
        />
      </div>
    );
  }
};

export default App;