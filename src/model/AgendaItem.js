import uuidv1 from 'uuid/v1';

export default class AgendaItem {
    constructor(builder){
        this.id = builder.id;
        this.name = builder.name;
        this.duration = builder.duration;
        this.timeLeft = builder.timeLeft !== undefined ? builder.timeLeft : builder.duration;
        Object.freeze(this)
    };

    getMinutes(){
        return this.duration / 60;
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
            .withTimeLeft(duration)
            .build();
    }

    tick() {
        return new AgendaItem.Builder()
            .fromAgendaItem(this)
            .withTimeLeft(this.timeLeft - 1)
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

            withTimeLeft(timeLeft){
                this.timeLeft = timeLeft;
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

    static calculateTotalTimeLeft = (items) =>
        AgendaItem.calculateTotal(items, (item) => item.timeLeft);


    static calculateTotal = (items, getter) =>
        items.map((item) => getter(item)).reduce((prev, curr) => prev + curr, 0);


}