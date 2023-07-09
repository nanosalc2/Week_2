import { Person } from "./person";

let person1:Person = new Person("Carlos", 41, "calle agila");
console.log(person1);
person1.printName();
console.log(person1.yearOfBirth(2023));
console.log(person1.getAddress());
person1.setAddress('Av Fernandez');
console.log(person1.getAddress());
console.log(person1);
