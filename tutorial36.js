console.log('Welcome in tutorial 36');
/*

Create a class library and implement the following :
constructor must take the book list as an argument
getBookList()
issueBook(bookname,user)
returnBook(bookname)

// using Class

*/

// class Library{
//     constructor(bookList){
//         this.bookList = bookList;
//         this.issuedBook = {};
//     }

//     getBookList(){
//         this.bookList.forEach(element => {
//             console.log(element);
//         });
//     }

//     issueBook(bookName,user){
//         if(this.issuedBook[bookName] == undefined){
//             this.issuedBook[bookName] = user;
//         } else{
//             console.log('This book is already issued!')
//         }

//     }

//     returnBook(bookName){
//         delete this.issuedBook[bookName]

//     }
// }


// using Prototype

function Books(bookList){
    this.bookList = bookList;
    this.issuedBooks = {};
}

let book = new Books(['Harry Potter','Chacha Choudhary','Learn JavaScript']);

Books.prototype.getBooks = function (){
    this.bookList.forEach(element => {
        console.log(element);
    });
}

Books.prototype.issueBook = function(bookName,user){
    // if(this.issuedBooks[bookName] == undefined){
    if(bookName in this.issuedBooks == false){
        this.issuedBooks[bookName] = user;
    } else{
        console.log('This book is already issued!');
    }
}

Books.prototype.returnBook = function(bookName){
    delete this.issuedBooks[bookName];
}

console.log(book);
console.log(book.getBooks());
console.log(book.issueBook('Harry Potter','Anwar'));
// console.log(book.returnBook('Harry Potter'));
console.log(book);
console.log(book.getBooks());
