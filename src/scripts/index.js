import myWeather from './Weather';
import date from './Date';
import ui from './UI';

class App{
    getCurrentWeather(){
        myWeather.getWeather()
        .then(data => ui.updateWeather(data))
        .catch(err => console.log(err));
    }
}

document.addEventListener('DOMContentLoaded', e => {
    const app = new App();
    // myWeather.changeCity('lagos');
    ui.showDate();
    app.getCurrentWeather();
});