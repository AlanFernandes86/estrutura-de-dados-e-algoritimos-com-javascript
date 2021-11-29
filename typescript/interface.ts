interface Person {
    name: string;
    age: number;
}
function printName(person: Person): void {
    console.log(person.name);
}

const john = {name: 'John', age: 21};
const mary = {name: 'Mary', age: 21, phone: '123-45678'}; // duck typing

printName(john);
printName(mary);

interface Comparable { // interface é como um contrato
    compareTo(b):number;
}
class MyObject implements Comparable { // caso não implemente a função compareTo, acorre um erro
    compareTo(b: any): number {
        return b * 100;
    }
}