import {v4 as uuid} from 'uuid'


export class todo {
    constructor(description) {
        this.id = uuid();
        this.description = description;
        this.todo = false;
        this.createAt  = new Date()
    }
}