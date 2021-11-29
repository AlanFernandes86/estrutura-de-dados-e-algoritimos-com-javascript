// Array concat
const zero = 0;
const positiveNumbers = [1, 2, 3, 4, 5, 6];
const negativeNumbers = [-3, -2, -1];

const numbers = negativeNumbers.concat(zero, positiveNumbers);

console.log(numbers);

// Array every - itera pelo array até que a função devolva false
const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
const isEven = (x) => x % 2 === 0; // verifica se é par

// 1º elemento é 1 o retorno será false e será a unica vez que a função será executada
console.log(numbers2.every(isEven)); 

// Array some - itera pelo array até que a função devolva true
console.log(numbers2.some(isEven));

// forEach
numbers2.forEach((x) => console.log(isEven(x)));

// map - armazena o resultado da função
const map = numbers2.map(isEven);
console.log(map);

// filter - devolve os elementos para os quais a função devolveu true
const filter = numbers2.filter(isEven);
console.log(filter);

// reduce - recebe uma função com previousValeu, currentValue, index e array
const sum = numbers2.reduce((previous, current) => previous + current);
console.log(sum);

// objeto @@iterator
const iterator = numbers2[Symbol.iterator]();
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);

for (const n of iterator) {
  console.log(n);
}
// iterator.next() devolverá undefined se não houver mais valores para iterar.
