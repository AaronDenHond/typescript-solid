"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ostrich = void 0;
var Ostrich = /** @class */ (function () {
    function Ostrich() {
    }
    Object.defineProperty(Ostrich.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ostrich.prototype, "type", {
        get: function () {
            return 'ostrich';
        },
        enumerable: false,
        configurable: true
    });
    Ostrich.prototype.makeSound = function () {
        return 'Im a shitty bird';
    };
    return Ostrich;
}());
exports.Ostrich = Ostrich;
