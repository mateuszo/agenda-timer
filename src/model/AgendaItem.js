import uuidv1 from 'uuid/v1';

export default class AgendaItem {
    constructor(name, duration){
        this.id = uuidv1();
        this.name = name;
        this.duration = duration;
        this.timeLeft = duration;
        this.isFinished = false;
    };

    static calculateTotal = (items) =>
        items.map((item) => item.duration).reduce((prev, curr) => prev + curr, 0);
}