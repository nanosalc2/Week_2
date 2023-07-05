let Person = require("./person.js");

class Contacts
{
    constructor()
        {
            this.persons = [];
        }

    printPersons()
        {
            console.log(this.persons); 
        }
};

module.exports = Contacts;