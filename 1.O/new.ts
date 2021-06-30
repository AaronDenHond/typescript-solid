//comment added for testing
//Second comment for testing

import {Zoo} from './classes/Zoo';
import {Dog} from './classes/Dog';
import {Cat} from './classes/Cat';
import {Parrot} from './classes/Parrot';
import {Ostrich} from './classes/Ostrich';



let zoo = new Zoo ;
zoo.addAnimal(new Cat);
zoo.addAnimal(new Dog);
zoo.addAnimal(new Parrot);
zoo.addAnimal(new Ostrich);

let cat = new Cat();
let dog = new Dog();
let parrot = new Parrot();

console.log(cat.makeSound());
console.log(dog.makeSound());
console.log(parrot.makeSound());

zoo.animals.forEach((animal) => {
    document.querySelector('#target').innerHTML += (animal.type + ": " + animal.makeSound() + "<br>");
});