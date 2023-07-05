let Person = require("./person.js");
let Contacts = require("./contacts.js");

let carlos = new Person("carlos", "Salcedo", 1.80, 84);
let maria = new Person("Maria", "Martin", 1.75, 70);
let camila = new Person("Camila", "Perez",1.68, 65);

let estudiantes = new Contacts()
estudiantes.persons = [carlos, maria, camila]
estudiantes.printPersons();