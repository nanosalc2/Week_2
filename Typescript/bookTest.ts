import { Book } from "./book"

let libro:Book = new Book("El niño cazador", 150, "2874456-BC23572", "Carlos Salcedo", "el perro y la rana");

console.log(libro.getTitle());
console.log(libro.getNPages());
console.log(libro.getIsbn());
console.log(libro.getAuthor());
console.log(libro.getEditorial());
console.log(libro.toString());
libro.setTitle("Bluey");
libro.setNPages(140);
libro.setIsbn("2434470-BA24078");
libro.setAuthor("Mathias");
libro.setEditorial("Casa Blanca");
console.log(libro.getTitle());
console.log(libro.getNPages());
console.log(libro.getIsbn());
console.log(libro.getAuthor());
console.log(libro.getEditorial());
console.log(libro.toString());