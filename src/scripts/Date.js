class DateApp{
    constructor(){
        this.date = new Date();
    }

    getFullDate(){
        const options = {weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' };
        let fullDate = this.date.toLocaleDateString('en-US', options);
        return fullDate;
    }
}

const date = new DateApp();
export default date;