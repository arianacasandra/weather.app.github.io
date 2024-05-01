const apiKey = "4c2816ae828eb33db097ae3585a254db";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");
async function checkWeather(city)
{
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`); //request -> Api
    var data = await response.json(); // convert to json format and stored
   //console.log(data);
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    if(data.weather[0].main == "Clouds")
    {
        weatherIcon.src = "images/clouds.png";
    }
    else  if(data.weather[0].main == "Clear")
    {
        weatherIcon.src = "images/clear.png";
    }
    else  if(data.weather[0].main == "Drizzle")
    {
        weatherIcon.src = "images/drizzle.png";
    }
    else  if(data.weather[0].main == "Humidity")
    {
        weatherIcon.src = "images/humidity.png";
    }
    else  if(data.weather[0].main == "Mist")
    {
        weatherIcon.src = "images/mist.png";
    }
    else  if(data.weather[0].main == "Rain")
    {
        weatherIcon.src = "images/rain.png";
    }
    else  if(data.weather[0].main == "Snow")
    {
        weatherIcon.src = "images/snow.png";
    }
    else  if(data.weather[0].main == "Wind")
    {
        weatherIcon.src = "images/wind.png";
    }
    document.querySelector(".weather").style.display = "block";
    //displays after introducing the city
}
searchBtn.addEventListener("click", ()=>{
checkWeather(searchBox.value);
})    