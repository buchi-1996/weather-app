import myWeather from './Weather';
import date from './Date';
import ui from './UI';
import myStore from './Storage';
import '../styles/index.scss';

class App{
    constructor(city){
        this.city = city;
        this.loader = document.querySelector('#img__loader');
    }

    getCurrentWeather(){
        this.loader.style.display = 'block';
        myWeather.getWeather()
        .then(data => {
            if(data.message){
                myStore.setData('new york');
                ui.showAlert('.wrong__city', data.message);
            }else{
                ui.updateWeather(data);
            }
        })
        .catch(err => console.log(err));
    }

    
}

document.addEventListener('DOMContentLoaded', e => {
    const app = new App();
    ui.showDate();
    app.getCurrentWeather();
});

document.querySelector('.card').addEventListener('submit', (e) => {
    e.preventDefault();
    const app = new App();
    let myCity = document.querySelector('#search').value;
    if(myCity !== ''){
        myWeather.changeCity(myCity);
        myStore.setData(myCity);
        app.getCurrentWeather();
        document.querySelector('#search').value = '';
    }else{
        ui.showAlert('.empty__field', 'insert city name before hitting enter');
    }
    
    
});
