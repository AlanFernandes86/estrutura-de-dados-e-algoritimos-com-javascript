// ******* EcmaScript 6: spread operator ('...')
function sum(x = 1, y = 2, z = 3) {
    return x + y + z;
}

const params = [3, 4, 5];
console.log(sum(...params)); // transforma array em parâmetros

const numbers = [1, 2, ...params]; // pushing values into array
console.log(numbers);

// ******* EcmaScript 6: rest parameter ('...')
function restParameterFunction(x, y, ...a) { // transforma a partir do 3º parâmetro em array.
    return (x + y) * a.length;
}
console.log(restParameterFunction(1, 2, 'hello', true, 7)); // outputs 9;

// code above is the same as ES5:
function restParameterFunction2(x, y) {
    // eslint-disable-next-line prefer-rest-params
    const a = Array.prototype.slice.call(arguments, 2);
    return (x + y) * a.length;
}
console.log(restParameterFunction2(1, 2, 'hello', true, 7));