import uuidv1 from 'uuid/v1';

export default class AgendaItem {
    constructor(builder){
        this.id = builder.id;
        this.name = builder.name;
        this.duration = builder.duration;
        this.timeSpent = builder.timeSpent !== undefined ? builder.timeSpent : 0;
        Object.freeze(this)
    };

    getMinutes(){
        return this.duration / 60;
    }

    getTimeLeft(){
        return this.duration - this.timeSpent;
    }

    setName(name){
        return new AgendaItem.Builder()
            .fromAgendaItem(this)
            .withName(name)
            .build();
    }

    setDuration(duration){
        return new AgendaItem.Builder()
            .fromAgendaItem(this)
            .withDuration(duration)
            .build();
    }

    tick() {
        return new AgendaItem.Builder()
            .fromAgendaItem(this)
            .withTimeSpent(this.timeSpent + 1)
            .build();
    }

    static get Builder(){
        class Builder {
            constructor(id = uuidv1()){
                this.id = id;
            }

            fromAgendaItem(item){
                Object.assign(this, item);
                return this;
            }

            withName(name){
                this.name = name;
                return this;
            }

            withDuration(duration){
                this.duration = duration;
                return this;
            }

            withTimeSpent(timeSpent){
                this.timeSpent = timeSpent;
                return this;
            }

            build(){
                return new AgendaItem(this);
            }
        }
        return Builder
    }

    static calculateTotalDuration = (items) =>
        AgendaItem.calculateTotal(items, (item) => item.duration);

    static calculateTotalTimeSpent = (items) =>
        AgendaItem.calculateTotal(items, (item) => item.timeSpent);

    static calculateTotalDifference = (items) =>
        AgendaItem.calculateTotal(items, (item) => item.getTimeLeft());

    static calculateTimeTillTheEnd = (items) =>
        AgendaItem.calculateTotal(items, (item) => item.timeSpent < item.duration ? item.duration - item.timeSpent : 0);

    static calculateTotal = (items, getter) =>
        items.map((item) => getter(item)).reduce((prev, curr) => prev + curr, 0);


}