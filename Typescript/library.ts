import { Book } from "./book"

export class Library 
{
    private books:Book [];
    private address: string;
    private manager: string;

    constructor(books:Book[], address:string, manager: string)
    {
        this.books = books;
        this.address = address;
        this.manager = manager; 
    };

    public getAddress():string
    {
        return this.address;
    };
    
    public getManager():string
    {
        return this.manager;
    }; 

    public setAddress(newAddress:string):void
    {
        this.address = newAddress;
    };

    public setManager(newManager:string):void
    {
        this.manager = newManager;
    };

    public toString():string
    {
    let x = "";
    let index = 1;
        for (let book of this.books)
        {
            x+= `Book${index}:\n`
            x += `${book.toString()}\n\n`
            index ++
        }
    return x;
    };

    public getNumberOfBooks():number
    {
        return this.books.length
    };

    public findByAuthor(author:string):Book[]
    {   
         let authorArray:Book[] = this.books.filter
        (
            function(value)
            {
                return value.getAuthor() == author;
            }
        );
        return authorArray;
    }; 
};
