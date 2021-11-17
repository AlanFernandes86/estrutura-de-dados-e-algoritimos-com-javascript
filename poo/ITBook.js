import Book from './Book';
class ITBook extends Book {
  constructor(title, pages, isbn, technology) {
    super(title, pages, isbn);
    this.technology = technology;
  }
  printTecnology() {
    console.log(this.technology);
  }
};

let params = ['Augoritimo e Estrutura de Dados', 'Autora', 2021, 'Javascript']

let itBook = new ITBook(...params);

console.log(ITBook.printTecnology());
