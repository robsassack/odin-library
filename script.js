let myLibrary = [];
let display = document.querySelector('.library');
let form = document.querySelector("#bookForm");

// book constructor
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

// add book to library
function addBookToLibrary(add) {
    myLibrary.push(add);
    printLibrary();
}

// function to loop through books in library and display the content for each book
function printLibrary() {
    display.textContent = '';
    for (let i=0; i < myLibrary.length; i++) {
        let newBook = document.createElement('li');
        let delButton = document.createElement('button');
        delButton.innerText = "Delete";
        delButton.className = "deleteBook";

        let readStatus = "has not been read";

        if (myLibrary[i].read) {
            readStatus = "has been read";
        }
        let textFormat = `${myLibrary[i].title} by ${myLibrary[i].author}, ${myLibrary[i].pages} pages, ${readStatus}`;

        newBook.appendChild(document.createTextNode(textFormat));
        newBook.appendChild(delButton);
        display.appendChild(newBook);

        // event listener to delete book from library
        delButton.addEventListener('click', (e) => {
            myLibrary.splice(i, 1);
            printLibrary();
        });
    }
}

// button listener to create a new book
form.addEventListener("submit", (e) => {
    e.preventDefault();
    let title = document.querySelector("#title").value;
    let author = document.querySelector("#author").value;
    let pages = document.querySelector("#pages").value;
    let read = document.querySelector("#read").checked;
    let newBook = new Book(title, author, pages, read);
    addBookToLibrary(newBook);
    form.reset();
});

// sample books for when page is first loaded
const book1 = new Book("Big Adventure", "John Smith", 123, true);
addBookToLibrary(book1);
const book2 = new Book("Science Book", "Dr. Brown", 410, false);
addBookToLibrary(book2);
