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
addBookToLibrary("Habits", "James Clear", 10);
console.log(myLibrary);
listBooks();
