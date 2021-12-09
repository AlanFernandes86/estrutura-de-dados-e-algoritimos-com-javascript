const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const numbers2 = Array.from(numbers);

const evens = Array.from(numbers, (x) => {
    if (x % 2 === 0){
        return x;
    } else {
        return undefined;
    }
});

console.log(evens);

