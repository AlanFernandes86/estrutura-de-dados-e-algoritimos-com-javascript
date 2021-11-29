let numbers = [0, 2, 3, 4, 5, 6, 7];

// eslint-disable-next-line no-extend-native
Array.prototype.insertFirstPosition = function (value) {
    for (let i = this.length; i >= 0; i -= 1) {
        this[i] = this[i - 1];
     }
    this[0] = value;
};

// eslint-disable-next-line no-extend-native
Array.prototype.deleteFirstPosition = function () {
    for (let i = 0; i < this.length; i += 1) {
        this[i] = this[i + 1];
     }
};

// eslint-disable-next-line no-extend-native
Array.prototype.reIndex = function (array) {
    const newArray = [];
    for (let i = 0; i < this.length; i += 1) {
        if (array[i] !== undefined) {
            newArray.push(array[i]);
        }
     }
     return newArray;
};

numbers.insertFirstPosition(13);
console.log(numbers);

numbers.unshift(33, 14);
console.log(numbers);

numbers.deleteFirstPosition();
console.log(numbers);

numbers = numbers.reIndex(numbers);
console.log(numbers);

numbers.shift();
console.log(numbers);