import myStore from './Storage';

class Weather{
    constructor(city){
        this.city = city;
        this.apiKey = 'aaf6e61337fd5555767d7bd243858055';
        this.loader = document.querySelector('#img__loader');
    }

    async getWeather(){
        
        const response =  await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.apiKey}&units=metric`)
        const resData = await response.json();
        this.loader.style.display = 'none';
        return resData;

    }

    changeCity(city){
        this.city = city;
    }
}

const getCity = myStore.getData();
const myWeather = new Weather(getCity.city);
export default myWeather;