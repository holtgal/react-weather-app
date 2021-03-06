import React from "react";

const Weather = props => (
    <div className = "weather__info">
        {
            props.city && props.country && <p className="weather__key">Location: 
                <span className = "weather__value" > {props.city}, {props.country}</span>
               
            </p>
            
        }

        {
            props.temperature && <p className="weather__key"> 
                Temperature : 
                <span className = "weather__value"> {props.temperature}</span>
                </p>
        }


        {
            props.humdity && <p className="weather__key">
                Humditity: 
                <span className = "weather__value"> {props.humditity}</span> 
                </p>
        }

        {
            props.description && <p className="weather__key"> 
                Conditions: 
                <span className = "weather__value"> {props.description}</span>
                </p>
        }


        {
            props.error && <p>
            {props.error}
            </p>
        }


    </div>);






export default Weather;