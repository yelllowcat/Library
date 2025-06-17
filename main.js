/*function Book(title, author, nPages, readed) {
  if (!new.target) {
    throw Error("You must use the 'new' operator to call the constructor");
  }
  this.title = title;
  this.author = author;
  this.nPages = nPages;
  this.readed = readed;
  this.info = function () {
    const s = readed ? "readed" : "not read yet";
    return "The " + title + "by " + author + "," + nPages + " Pages, " + s;
  };
}
const book = new Book("Habits", "James Clear", 10, false);

Book.prototype.madeBy = function () {
  return `Book made by ${this.author}.`;
};
console.log(book.madeBy()); */
"use strict";

let hamster = {
  stomach: [],

  eat(food) {
    this.stomach.push(food);
  },
};

let speedy = {
  stomach: [],

  __proto__: hamster,
  stomach: [],
};

let lazy = {
  __proto__: hamster,
};

// This one found the food
speedy.eat("apple");
alert(speedy.stomach); // apple

// This one also has it, why? fix please.
alert(lazy.stomach); // apple
