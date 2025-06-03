class Library{
    constructor() {
        this.book = [];
    }
    addBook(book){
        this.book.push(book);
    }
    listallBooks(){

        if(this.book.length==0){
            console.log("No books in the library");
        }
        else{
            this.book.forEach(function(book,index){
                console.log((index+1)+`.`+book.name+','+book.author);
            });
        }
    }
}

class Book{
    constructor(name, author, price,isbn) {
        this.name = name;
        this.author = author;
        this.price = price;
        this.isbn = isbn;
        this.readStatus = false;
    }
    getDetails() {
        console.log(`Name: ${this.name}, Author: ${this.author}, Price: ${this.price} and ${this.readStatus?'You have read this book':'You have not read this book'}`);
    }

    changeReadStatus() {
        this.readStatus = !this.readStatus;
        console.log(`Read status of "${this.name}" is now ${this.readStatus ? 'read' : 'not read'}.`);
    }
    
}

const hp = new Book("Harry Potter", "J.K. Rowling", 500, "1234567890");
const hobbit = new Book("The Hobbit", "J.R.R. Tolkien", 300, "0987654321");
const lor = new Book("The Lord of the Rings", "J.R.R. Tolkien", 700, "1122334455");       
const Alchemist = new Book("The Alchemist", "Paulo Coelho", 400, "2233445566");
const tcie = new Book("The Catcher in the Rye", "J.D. Salinger", 350, "3344556677");
const Mockingbird = new Book("To Kill a Mockingbird", "Harper Lee", 450, "4455667788");
const y1984 = new Book("1984", "George Orwell", 600, "5566778899");
const PAP = new Book("Pride and Prejudice", "Jane Austen", 550, "6677889900");
const TGG = new Book("The Great Gatsby", "F. Scott Fitzgerald", 500, "7788990011");
const Meluha=new Book("Meluha", "Amish Tripathi", 300, "8899001122");
const SecretOfNagas=new Book("The Secret of the Nagas", "Amish Tripathi", 350, "9900112233");
const OathOfVayuputras=new Book("The Oath of the Vayuputras", "Amish Tripathi", 400, "0011223344");


var library01=new Library();
library01.addBook(hp);
library01.addBook(hobbit);    
library01.addBook(lor); 
var library02=new Library();
library02.addBook("Harry Potter:Goblet of Fire");
library02.addBook("Harry Potter: Order of the Phoenix");
library02.addBook("The Lord of the Rings:3 ");
library02.addBook("Harry Potter: Half Blood Prince");
library02.addBook("The Lord of the Rings:2 "); 
library02.addBook("Harry Potter: Hallows");
library02.addBook("The Lord of the Rings:4 ");
var library03=new Library();
library03.addBook(Meluha);
library03.addBook(SecretOfNagas);
library03.addBook(OathOfVayuputras);

library03.listallBooks();
Book1.getDetails();
Book1.changeReadStatus();
Book1.getDetails();