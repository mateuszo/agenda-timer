import uuidv1 from 'uuid/v1';

export default class AgendaItem {
    constructor(name, duration){
        this.id = uuidv1();
        this.name = name;
        this.duration = duration;
        this.timeLeft = duration;
        this.isFinished = false;
    };

    getMinutes(){
        return this.duration / 60;
    }

    tick() {
        this.timeLeft--;
    }

    static calculateTotalDuration = (items) =>
        AgendaItem.calculateTotal(items, (item) => item.duration);

    static calculateTotalTimeLeft = (items) =>
        AgendaItem.calculateTotal(items, (item) => item.timeLeft);


    static calculateTotal = (items, getter) =>
        items.map((item) => getter(item)).reduce((prev, curr) => prev + curr, 0);


}