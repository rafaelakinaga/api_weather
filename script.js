const apiKey = "fbffa548dda1c2dcdceafa8bb5eaf624";
const apiCountry= "https://flagsapi.com/BE/shiny/64.png";

const cityInput = document.querySelector("#city-input");
const searchBtn = document.querySelector("#search");

const cityElement = document.querySelector("#city");
const tempElement = document.querySelector("#temperature span");
const descElement = document.querySelector("#description");
const weatherIconElement = document.querySelector("#weather-icon");
const countryElement = document.querySelector("#country");
const humidityElement = document.querySelector("#umidity span");
const windElement = document.querySelector("#wind span");

const getWeatherData = async(city)=>{
    const apiWeatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}&lang=pt_br`;


        const res = await fetch(apiWeatherURL);
        const data = await res.json();

    return data

};

const showWeatherData = async (city) => {
    const data = await getWeatherData (city);
    cityElement.innerText = data.name;
    tempElement.innerText = parseInt(data.main.temp);
    descElement.innerText = data.weather[0].description;
    weatherIconElement.setAttribute("src",`http://openweathermap.org/img/wn/${data.weather[0].icon}.png`);
    countryElement.setAttribute("src",`https://flagsapi.com/${data.sys.country}/shiny/64.png`);
    humidityElement.innerText = `${data.main.humidity}%`;
    windElement.innerText = `${parseInt(data.wind.speed)}km/h`;
};





searchBtn.addEventListener("click", (e)=>{
    e.preventDefault();

    const city = cityInput.value;
    showWeatherData(city);
});
