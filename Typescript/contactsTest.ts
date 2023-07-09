import { Person } from "./person";
import { Contacts } from "./contacts";

let person1:Person = new Person('Carlos', 25, 'calle sol');
let person2:Person = new Person('Maria', 22, 'calle Gaviota');
let person3:Person = new Person('Javier', 28, 'calle Pelicano');
let estudiantes1:Contacts = new Contacts();
estudiantes1.people = [person1, person2, person3];
console.log(estudiantes1.printCalendar());