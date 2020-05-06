
console.log('Welcome to the world of books......');

const book_submit = document.querySelector('.submit_book');

console.log(book_submit);

book_submit.addEventListener('click', function(){
  console.log('clicked');
});


//Browser Width Fun.
const width = window.innerWidth;

console.log(width);

if(width < 1900){
  console.log('less < 1900');
}




//Book class - Book

class Book{
  constructor(title, author, isbn){
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}

//UI Class - Takes care of UI Tasks

class UI{
  static displayBooks(){
    const StoredBooks = [
      {
        title: 'Book One',
        author: 'A Worm',
        isbn: '7879484'
      },
      {
        title: 'Book Two',
        author: 'A Woman',
        isbn: '7873663'
      },
      {
        title: 'Book Three',
        author: 'A Man',
        isbn: '7870983'
      },
      {
        title: 'Book Four',
        author: 'A Alien',
        isbn: '7876383'
      }
    ];


    const books = StoredBooks;

    books.forEach((book) => UI.addBookToList(book));
  }

  static addBookToList(book){
       const list = document.querySelector('#book-list');

       const row = document.createElement('tr');

       row.innerHTML = `
          <td>${book.title}</td>
          <td>${book.author}</td>
          <td>${book.isbn}</td>
          <td><a href="#">Delete This Book X</a></td>
       `;

       list.appendChild(row);


  }
}

//Store Class - Handles storage

//events to display books
document.addEventListener('DOMContentLoaded', UI.displayBooks);

//event to add a book


//event to remove a book

//Optional In future - Is to have a filter for books
