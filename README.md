# Estrutura de dados e algoritimos com javascript

### ECMAScript 2015+

1. spread-rest-operator

   ```
   ~~~javascript
   // spread operator ('...')
   function sum(x = 1, y = 2, z = 3) {
       return x + y + z;
   }
   
   const params = [3, 4, 5];
   console.log(sum(...params)); // transforma array em parâmetros
   
   const numbers = [1, 2, ...params]; // pushing values into array
   console.log(numbers);
   
   // rest parameter ('...')
   function restParameterFunction(x, y, ...a) { // transforma a partir do 3º parâmetro em array.
       return (x + y) * a.length;
   }
   ~~~
   ```

2. array-destructuring

   ```
   ~~~javascript
   const [x, y] = ['a', 'b'];
   
   console.log(`x: ${x}, y: ${y}`);
   
   /* o código anterior é o mesmo que:
   let x = 'a';
   let y = 'b'; 
   */
   
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
   ~~~
   ```

3. property-shorthand

   ```
   ~~~javascript
   const [x, y] = ['a', 'b'];
   const obj = { x, y };
   console.log(obj);
   
   /* o código anterior é o mesmo que:
   const x = 'a';
   const y = 'b';
   const obj = { x: x, y: y };
   */
   ~~~
   ```

4. shorthand-method-name

   ```
   ~~~javascript
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
   ~~~
   ```

