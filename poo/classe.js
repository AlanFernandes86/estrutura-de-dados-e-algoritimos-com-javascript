// import ITBook from './ITBook'; - > não funciona no Run Code
const { ITBook } = require('./ITBook');

function BookFunction(title, author, description) {
  this.title = title;
  this.author = author;
  this.description = description;
  this.getTitle = () => this.title; // função interna
}

const [title, author, description, technology] = [
  'Estrutura de dados e algoritimos',
  'Loiane',
  'Livro sobre algoritimos usando o javascript',
  'Javascript',
];

const bookFunction = new BookFunction(title, author, description);

console.log(bookFunction);


BookFunction.prototype.printTitle = () => {
    console.log("Função externa");
}; // função estática ou global

bookFunction.printTitle();

console.log(bookFunction.getTitle());

const itBook = new ITBook(title, author, description, technology);

itBook.printTechnology();
itBook.printIsbn();
