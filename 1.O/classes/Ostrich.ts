export class Ostrich {
    private _name;

    set name(value) {
        this._name = value;
    }

    get name() {
        return this._name;
    }

    get type() {
        return 'ostrich';
    }

    public makeSound() : string  {
       return 'Im a shitty bird';
    }
}