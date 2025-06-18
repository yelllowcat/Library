const myLibrary = [];
function Book(id, title, author, nPages, readed = false) {
  if (!new.target) {
    throw Error("You must use the 'new' operator to call the constructor");
  }
  this.id = id;
  this.title = title;
  this.author = author;
  this.nPages = nPages;
  this.readed = readed;
  this.info = function () {
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

function addBookToLibrary(title, author, nPages) {
  let id = crypto.randomUUID();

  const book = new Book(id, title, author, nPages, false);
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

console.log();
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

console.log(myLibrary);
listBooks();
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
  let divs = document.createElement("div");
  divs.style.width = "22vh";
  divs.style.height = "22vh";
  divs.style.textAlign = "center";
  let color = changeColor();
  divs.style.background = color;
  divs.innerHTML = element.title;
  container.appendChild(divs);
});
