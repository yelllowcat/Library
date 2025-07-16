const myLibrary = [];
class Book {
  constructor(id, title, author, nPages, readed = false) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.nPages = nPages;
    this.readed = readed;
  }

  info = function () {
    const s = this.readed ? "readed" : "not read yet";
    return (
      "The " +
      this.title +
      "by " +
      this.author +
      "," +
      this.nPages +
      " Pages, " +
      s
    );
  };
}

function addBookToLibrary(title, author, nPages, readed = false) {
  let id = crypto.randomUUID();

  const book = new Book(id, title, author, nPages, readed);
  myLibrary.push(book);
}

function listBooks() {
  myLibrary.forEach((element) => {
    console.log(element);
  });
}

Book.prototype.madeBy = function () {
  return `Book made by ${this.author}.`;
};

addBookToLibrary("Atomic Habits", "James Clear", 10);
addBookToLibrary("The Power of Now", "Eckhart Tolle", 15);
addBookToLibrary("Deep Work", "Cal Newport", 12);
addBookToLibrary("The Subtle Art of Not Giving a F*ck", "Mark Manson", 14);
addBookToLibrary("Thinking, Fast and Slow", "Daniel Kahneman", 18);
addBookToLibrary("Can't Hurt Me", "David Goggins", 16);
addBookToLibrary("Start With Why", "Simon Sinek", 11);
addBookToLibrary("12 Rules for Life", "Jordan B. Peterson", 20);
addBookToLibrary("Make Your Bed", "William H. McRaven", 9);
addBookToLibrary("Mindset", "Carol S. Dweck", 13);
addBookToLibrary("Grit", "Angela Duckworth", 17);
addBookToLibrary("Digital Minimalism", "Cal Newport", 10);
addBookToLibrary("Ego Is the Enemy", "Ryan Holiday", 11);
addBookToLibrary(
  "The 7 Habits of Highly Effective People",
  "Stephen R. Covey",
  19
);
addBookToLibrary("The Four Agreements", "Don Miguel Ruiz", 8);
addBookToLibrary("The Miracle Morning", "Hal Elrod", 13);
addBookToLibrary(
  "How to Win Friends and Influence People",
  "Dale Carnegie",
  16
);

function changeColor() {
  let rand1 = getRandomInt(256);
  let rand2 = getRandomInt(256);
  let rand3 = getRandomInt(256);

  return "rgb(" + rand1 + "," + rand2 + "," + rand3 + ")";
}
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
const container = document.querySelector(".container");
myLibrary.forEach((element) => {
  const template = document.getElementById("book-template");
  const clone = template.content.cloneNode(true);

  const card = clone.querySelector(".book-card");
  const title = clone.querySelector(".book-title");
  const author = clone.querySelector(".book-author");
  const pages = clone.querySelector(".book-pages");
  const del_button = clone.querySelector(".remove-btn");
  const status_button = clone.querySelector(".status-btn");

  card.style.background = changeColor();
  title.textContent = element.title;
  author.textContent = `By: ${element.author}`;
  pages.textContent = `${element.nPages} pages`;

  del_button.addEventListener("click", () => {
    card.remove();
  });
  status_button.addEventListener("click", () => {
    if (!element.readed) {
      status_button.style.background = "#22c55e";
      status_button.textContent = "Completed";
      element.readed = true;
    } else {
      status_button.style.background = "gray";
      element.readed = false;
      status_button.textContent = "Read Now";
    }
  });
  container.appendChild(clone);
});

const dialog = document.querySelector("dialog");
const newButton = document.querySelector(".new");
const closeButton = document.querySelector("dialog button");
const submitButton = document.querySelector(".submit");

const inputTitle = document.querySelector(".title");
const inputAuthot = document.querySelector(".author");
const inputNumber = document.querySelector(".number");

newButton.addEventListener("click", () => {
  dialog.showModal();
});
submitButton.addEventListener("click", (event) => {
  event.preventDefault();

  if (
    inputTitle.checkValidity() &&
    inputAuthot.checkValidity() &&
    inputNumber.checkValidity()
  ) {
    const newBook = [
      inputTitle.value,
      inputAuthot.value,
      inputNumber.value,
      false,
    ];
    console.log(newBook);
    addBookToLibrary(
      inputTitle.value,
      inputAuthot.value,
      inputNumber.value,
      false
    );
    renderSingleBook(newBook);
    inputTitle.value = "";
    inputAuthot.value = "";
    inputNumber.value = "";
    dialog.close(inputTitle.value);
  }
});

function renderSingleBook(book) {
  const template = document.getElementById("book-template");
  const clone = template.content.cloneNode(true);
  const del_button = clone.querySelector(".remove-btn");
  const status_button = clone.querySelector(".status-btn");

  const card = clone.querySelector(".book-card");
  card.style.background = changeColor();
  clone.querySelector(".book-title").textContent = book[0];
  clone.querySelector(".book-author").textContent = `By: ${book[1]}`;
  clone.querySelector(".book-pages").textContent = `${book[2]} pages`;
  del_button.addEventListener("click", () => {
    card.remove();
  });
  status_button.addEventListener("click", () => {
    if (!book[3]) {
      status_button.style.background = "#22c55e";
      status_button.textContent = "Completed";
      book[3] = true;
    } else {
      status_button.style.background = "gray";
      book[3] = false;
      status_button.textContent = "Read Now";
    }
  });

  container.appendChild(clone);
}

closeButton.addEventListener("click", () => {
  inputTitle.value = "";
  inputAuthot.value = "";
  inputNumber.value = "";
  dialog.close();
});
