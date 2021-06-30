"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Zoo_1 = require("./classes/Zoo");
var Dog_1 = require("./classes/Dog");
var Cat_1 = require("./classes/Cat");
var Parrot_1 = require("./classes/Parrot");
var Ostrich_1 = require("./classes/Ostrich");
var zoo = new Zoo_1.Zoo;
zoo.addAnimal(new Cat_1.Cat);
zoo.addAnimal(new Dog_1.Dog);
zoo.addAnimal(new Parrot_1.Parrot);
zoo.addAnimal(new Ostrich_1.Ostrich);
zoo.animals.forEach(function (animal) {
    document.querySelector('#target').innerHTML += (animal.type + ": " + animal.makeSound + "<br>");
});
