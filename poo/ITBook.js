// import Book from './Book';
const { Book } = require('./Book');

class ITBook extends Book {
  constructor(title, pages, isbn, technology) {
    super(title, pages, isbn);
    this.technology = technology;
  }

  printTechnology() {
    console.log(this.technology);
}
}

exports.ITBook = ITBook;
