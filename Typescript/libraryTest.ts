import { Book } from "./book"
import { Library } from "./library"


let libro1:Book = new Book("El niño cazador", 150, "2874456-BC23572", "Carlos Salcedo", "el perro y la rana");
let libro2:Book = new Book("Bluey", 140, "2434470-BA24078", "Mathias", "Casa Blanca");
let libro3:Book = new Book("El aguila", 155, "7893456-AS45983", "Richar Vero", "Army");

let biblioteca:Library = new Library([libro1,libro2,libro3], "Avda Fuenlabrada", "Aldo Massimo");
console.log(biblioteca.toString());
console.log(biblioteca.getNumberOfBooks());
console.log(biblioteca.findByAuthor("Mathias"));
console.log(biblioteca.getAddress());
console.log(biblioteca.getManager());
biblioteca.setAddress("calle Madrid");
biblioteca.setManager("Maria Perez");
console.log(biblioteca.getAddress());
console.log(biblioteca.getManager());