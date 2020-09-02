import date from './Date';

class UI{
    constructor(){
        this.card = document.querySelector('.card');
        this.input = document.querySelector('#search');
        this.submitBtn = document.querySelector('.fa-search');
        this.cityName = document.querySelector('.city__name');
        this.date = document.querySelector('.app__date');
        this.weatherResult = document.querySelector('.weather__result');
        this.weatherIcon = document.querySelector('.weather__icon img');
        this.feelsLike = document.querySelector('.weather__icon .feels__like');
        this.wind = document.querySelector('.wind h4');
        this.rain = document.querySelector('.rain h4');
        this.humidity = document.querySelector('.humidity h4');
        this.alert = document.querySelector('.my__alert');
        
    }

    showDate(){
        console.log(date.getFullDate());
        this.date.textContent = date.getFullDate();
    }

    updateWeather(data){
        
        this.cityName.textContent = `${data.name}, ${data.sys.country}`;
        this.weatherResult.textContent = `${Math.trunc(data.main.temp)}\xB0c`;
        this.weatherIcon.setAttribute('src', `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`);
        this.feelsLike.textContent = data.weather[0].description;
        this.wind.textContent = `${data.wind.speed} km/h`;
        this.rain.textContent = `${Math.trunc(data.main.feels_like)}\xB0c`;
        this.humidity.textContent = `${Math.trunc(data.main.humidity)}%`;
    }

    showAlert(alertName, errMessage){
        document.querySelector(alertName).classList.add('slideIn');
        document.querySelector(alertName).textContent = errMessage;

        setTimeout(() => {
            document.querySelector(alertName).classList.remove('slideIn');
        }, 3000)
    }

}


const ui = new UI();
export default ui;