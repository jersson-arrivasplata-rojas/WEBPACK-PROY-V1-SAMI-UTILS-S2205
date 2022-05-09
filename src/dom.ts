export class Dom {
    constructor() { }
    getById(id: string) {
        return document.getElementById(id);
    }
}