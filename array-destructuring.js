const [x, y] = ['a', 'b'];

console.log(`x: ${x}, y: ${y}`);

/* o código anterior é o mesmo que:
let x = 'a';
let y = 'b'; 
*/

// eslint-disable-next-line sonarjs/cognitive-complexity
function bubbleSort(numbersArray) {
    const ordenanteArray = numbersArray;
    for (let i = 1; i <= ordenanteArray.length; i += 1) {
        for (let j = 0; j < i; j += 1) {
            if (ordenanteArray[i] < ordenanteArray[j]) {
                [ordenanteArray[i], ordenanteArray[j]] = [ordenanteArray[j], ordenanteArray[i]];
            }
        }
    }
    return numbersArray;
}

console.log(bubbleSort([28, 74, 21, 30, 36, 12, 13, 99, 2]));
