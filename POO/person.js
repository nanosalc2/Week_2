class Person
{

    constructor(nombre, apellido, altura, peso)
        {
            this.nombre = nombre;
            this.apellido = apellido;
            this.altura = altura;
            this.peso = peso;
            this.yearOfBirth;
            this.hobbies = [];
        }

    calculadorIMC(peso, altura)
        {
            let imc = peso / (altura * altura);
            return imc.toFixed(2);
        };
                
    edad(curretYear)
       {
            let edad = curretYear - this.yearOfBirth;
            return edad;
       }

    printAll()
        {
            console.log(`nombre - ${this.nombre} \napellido - ${this.apellido} \naltura - ${this.altura} \npeso - ${this.peso} \naño de nacimiento - ${this.yearOfBirth}`);
        }

    printHobbies()
        {
            console.log(this.hobbies);
        } 
};

module.exports = Person;

