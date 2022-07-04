let myLibrary = [];
let display = document.querySelector(".library");
let form = document.querySelector("#bookForm");

// book class
class Book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }
}

// add book to library
function addBookToLibrary(add) {
  myLibrary.push(add);
  printLibrary();
}

// function to loop through books in library and display the content for each book
function printLibrary() {
  display.textContent = "";
  for (let i = 0; i < myLibrary.length; i++) {
    let newBook = document.createElement("li");

    // text formatting for book information
    let titleText = document.createElement("p");
    let authorText = document.createElement("p");
    let pagesText = document.createElement("p");
    let bookText = document.createElement("div");
    titleText.innerText = myLibrary[i].title;
    authorText.innerText = myLibrary[i].author;
    pagesText.innerText = myLibrary[i].pages + " pages";
    bookText.appendChild(titleText);
    bookText.appendChild(authorText);
    bookText.appendChild(pagesText);

    // creation of current read status
    let bookButtons = document.createElement("div");
    bookButtons.classList.add("book-buttons");
    let readCheckbox = document.createElement("div");
    readCheckbox.classList.add("read-status");
    readCheckbox.classList.add("read-false");
    readCheckbox.innerText = "Read ☒";
    if (myLibrary[i].read) {
      readCheckbox.classList.remove("read-false");
      readCheckbox.classList.add("read-true");
      readCheckbox.innerText = "Read ☑";
    }
    bookButtons.appendChild(readCheckbox);

    // creation of delete button
    let delButton = document.createElement("button");
    delButton.innerText = "Delete";
    delButton.className = "deleteBook";
    bookButtons.appendChild(delButton);

    // appends current book to the list of books
    newBook.appendChild(bookText);
    newBook.appendChild(bookButtons);
    display.appendChild(newBook);

    // event listener to toggle read status
    readCheckbox.addEventListener("click", (e) => {
      if (toggleReadStatus(myLibrary[i])) {
        readCheckbox.classList.add("read-true");
        readCheckbox.classList.remove("read-false");
        readCheckbox.innerText = "Read ☑";
      } else {
        readCheckbox.classList.add("read-false");
        readCheckbox.classList.remove("read-true");
        readCheckbox.innerText = "Read ☒";
      }
      printLibrary();
    });

    // event listener to delete book from library
    delButton.addEventListener("click", (e) => {
      myLibrary.splice(i, 1);
      printLibrary();
    });
  }
}

function toggleReadStatus(toggleBook) {
  toggleBook.read = !toggleBook.read;
  return toggleBook.read;
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
