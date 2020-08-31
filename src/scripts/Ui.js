import date from './Date';

class UI{
    constructor(){
        this.card = document.querySelector('.card');
        this.input = document.querySelector('#search');
        this.submitBtn = document.querySelector('.fa-search');
        this.cityName = document.querySelector('.city__name');
        this.date = document.querySelector('.app__date');
        this.weatherResult = document.querySelector('.weather__result')
        this.weatherIcon = document.querySelector('.weather__icon img');
        this.feelsLike = document.querySelector('.weather__icon .feels__like');
        this.wind = document.querySelector('.wind h4');
        this.rain = document.querySelector('.rain h4');
        this.humidity = document.querySelector('.humidity h4');
    }

    showDate(){
        console.log(date.getFullDate())
        this.date.textContent = date.getFullDate();
    }

    updateWeather(data){
        console.log(data);
        this.cityName.textContent = data.name
        this.weatherResult.textContent = `${data.main.temp.toFixed(0)}\xB0c`;
        this.weatherIcon.setAttribute('src', `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`);
        this.feelsLike.textContent = data.weather[0].description;
    }
}


const ui = new UI();
export default ui;