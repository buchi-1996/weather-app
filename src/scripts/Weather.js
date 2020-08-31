class Weather{
    constructor(city){
        this.city = city;
        this.apiKey = 'aaf6e61337fd5555767d7bd243858055';
    }

    async getWeather(){
        const response =  await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.apiKey}&units=metric`)
        const resData = await response.json();
        return resData;

    }

    changeCity(city){
        this.city = city;
    }
}

const myWeather = new Weather('new york');
export default myWeather;