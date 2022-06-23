let myLibrary = [];
let display = document.querySelector('.library');
let form = document.querySelector("#bookForm");

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(add) {
    myLibrary.push(add);
    printLibrary();
}

function printLibrary() {
    display.textContent = '';
    for (let i=0; i < myLibrary.length; i++) {
        let newBook = document.createElement('li');
        let readStatus = "has not been read";
        if (myLibrary[i].read) {
            readStatus = "has been read";
        }
        let textFormat = `${myLibrary[i].title} by ${myLibrary[i].author}, ${myLibrary[i].pages} pages, ${readStatus}`;
        newBook.appendChild(document.createTextNode(textFormat));
        display.appendChild(newBook);
    }
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    let title = document.querySelector("#title").value;
    let author = document.querySelector("#author").value;
    let pages = document.querySelector("#pages").value;
    let read = document.querySelector("#read").value;
    let newBook = new Book(title, author, pages, read);
    addBookToLibrary(newBook);
    console.log("Book added!");
    form.reset();
});

const book1 = new Book("Big Adventure", "John Smith", 123, true);
addBookToLibrary(book1);
const book2 = new Book("Science Book", "Dr. Brown", 410, false);
addBookToLibrary(book2);
