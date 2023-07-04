let Person = require("./person.js");            


let carlos = new Person('Carlos','Salcedo', 1.80, 84);
carlos.yearOfBirth = 1981;
carlos.hobbies = ["cazar", "pescar"]
carlos.printAll();
console.log(carlos.calculadorIMC(carlos.peso, carlos.altura));
console.log(carlos.edad(2023));
carlos.printHobbies();