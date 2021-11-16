function Book(title, author, description) {
  this.title = title;
  this.author = author;
  this.description = description;
  this.getTitle = function () {
    return this.title;
  }; // função interna
}

const book = new Book(
  'Estrutura de dados e algoritimos',
  'Loiane',
  'Livro sobre algoritimos usando o javascript',
);

console.log(book);

Book.prototype.printTitle = function () {
    console.log(this.title);
}; // função estática ou global

book.printTitle();
console.log(book.getTitle());
