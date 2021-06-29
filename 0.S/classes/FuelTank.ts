export class FuelTank {
    private _fuel : number = 0;
    private readonly MAXIMUM_FUEL_CAPACITY: number;  //max fuel has to be stored so tank
    private readonly FUEL_MILEAGE: number = 10;


    constructor(MAXIMUM_FUEL_CAPACITY: number) {
        
        this.MAXIMUM_FUEL_CAPACITY = MAXIMUM_FUEL_CAPACITY;
    }

    get fuel(): number {
        return this._fuel;
    }
    addFuel(fuel : number) {
        this._fuel = Math.min(fuel + this._fuel, this.MAXIMUM_FUEL_CAPACITY);
    }
}
//this is a comment