const temperature=30;
const windspeed = 50;
let wchill="N/A";

const calculateWindChill=(temp,windspeed)=>35.74 +(0.6215 * temp) - (35.75* (windspeed ^0.16)) + 0.4275*temp*(windspeed ^0.16);

const temp = document.querySelector('#temp');
const wind = document.querySelector('#wind');
const windchill = document.querySelector('#windchill');
const condition = document.querySelector('#condition');


temp.textContent= temperature;
wind.textContent= windspeed;

if(temperature <= 10 && windspeed > 4.8){
    wchill = calculateWindChill(temperature,windspeed);
}

windchill.textContent=wchill;
condition.textContent="Partial Cloudy";
