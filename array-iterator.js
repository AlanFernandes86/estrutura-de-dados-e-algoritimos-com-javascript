const numbers = ['a', 'e', 'i', 'o', 'u'];

// Objeto @@iterator
const iterator = numbers[Symbol.iterator]();
const nEntries = numbers.entries();
const nKeys = numbers.keys();
const nValues = numbers.values();

let value, done;
do {    
    ({ value , done } = iterator.next());
    console.log({value, done});
} while (!done);
console.log('----------------------------------');
do {    
    ({ value , done } = nEntries.next());
    console.log({value, done});
} while (!done);
console.log('----------------------------------');
do {    
    ({ value , done } = nKeys.next());
    console.log({value, done});
} while (!done);
console.log('----------------------------------');
do {    
    ({ value , done } = nValues.next());
    console.log({value, done});
} while (!done);