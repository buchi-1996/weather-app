class Storage{
    constructor(){
        this.city;
        this.defaultCity = 'new york';
    }

    getData(){
        if(localStorage.getItem('city') === null){
            this.city = this.defaultCity;
        }else{
            this.city = localStorage.getItem('city');
        }

        return {
            city: this.city
        }
    }

    setData(city){
        localStorage.setItem('city', city)
    }
}

const myStore = new Storage();
export default myStore;