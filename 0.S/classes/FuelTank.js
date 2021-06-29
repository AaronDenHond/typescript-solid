"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FuelTank = void 0;
var FuelTank = /** @class */ (function () {
    function FuelTank(MAXIMUM_FUEL_CAPACITY) {
        this._fuel = 0;
        this.FUEL_MILEAGE = 10;
        this.MAXIMUM_FUEL_CAPACITY = MAXIMUM_FUEL_CAPACITY;
    }
    Object.defineProperty(FuelTank.prototype, "fuel", {
        get: function () {
            return this._fuel;
        },
        enumerable: false,
        configurable: true
    });
    FuelTank.prototype.addFuel = function (fuel) {
        this._fuel = Math.min(fuel + this._fuel, this.MAXIMUM_FUEL_CAPACITY);
    };
    return FuelTank;
}());
exports.FuelTank = FuelTank;
