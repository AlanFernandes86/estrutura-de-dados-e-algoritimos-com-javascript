// import ITBook from './ITBook.js'; - > não funciona no Run Code // testar no navegador inserir type="module" na tag script
// Ler sobre Browserify e Webpack para criar um bundle com código transpilado para ES5
// Babel CLI - comando 'babel Book.js --out-dir lib'
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
    console.log('Função externa');
}; // função estática ou global

bookFunction.printTitle();

console.log(bookFunction.getTitle());

const itBook = new ITBook(title, author, description, technology);

itBook.printTechnology();
itBook.printIsbn();
