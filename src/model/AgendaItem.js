import uuidv1 from 'uuid/v1';

export default class AgendaItem {
    constructor(name, duration){
        this.id = uuidv1();
        this.name = name;
        this.duration = duration;
    };
}