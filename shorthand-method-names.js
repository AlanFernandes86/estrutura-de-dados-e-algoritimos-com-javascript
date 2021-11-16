/* Permite que se declare funções dentro de objetos, como se elas fossem propriedades. */
const hello = {
    name: 'abcdef',
    printHello() {
        return 'Hello';
    },
};
const hello2 = {
    name: 'abcdef',
    printHello: function printHello() {
       return 'Hello2';
    },
};
const hello3 = {
    name: 'abcdef',
    printHello: () => 'Hello3', // usando arrow functions
};
console.log(
`${hello.printHello()}
${hello2.printHello()}
${hello3.printHello()}`,
);
