import { MusicPlayer } from "./MusicPlayer";
import { Engine } from "./Engine";
import { FuelTank } from "./FuelTank";
export class Car {

    private _miles : number = 0;


    get miles(): number {
        return this._miles;
    }


    drive(engineStatus: boolean, fuel: number) {
        if(engineStatus === false || fuel <= 0) {
            //what I am doing here is a good principle called "failing early"
            // If you have some conditions you need to check, that will exclude most of the code in your function check that first
            // This prevents your "happy path" of code to be deeply indented.
            return;
        }
        
        fuel -= 1;
        this._miles += FUEL_MILEAGE;
    }


}