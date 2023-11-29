console.log("Connected")

/* =============== Function Scope ================*/
/* You will only be able to access the value inside the function. Also known as "Block Scoped", is any code within the {}*/
/* function printer(){
    const paper = "The NY Times";
    return paper; */

    /* Outer layer value can be access from inner layer, but inner layer value are not accessible for outside layer. */
/*     if(true){
        console.log(paper);
        let advert = 'cap for sale';
    }
    console.log(advert)
}

function scanner(paper){
    console.log(paper)
}

const paper = printer();
scanner(paper); */

/* ============== Exercise 1 & 2 ================= */
/* const divide = (num1, num2 = 1) => console.log(num1 / num2);
const even = (num) => console.log((num % 2 == 0)? true:false);

even(6)
divide(2)
divide(2, 4) */




/* ============== Default Parameter =================*/
/* function sum(a, b = 5){
    return a + b;
}

const sumOfNumber = sum(2, 4);
console.log(sumOfNumber);
const sumOfNumber2 = sum(2);
console.log(sumOfNumber2);

function sum(a, b){
    return a + b;
}

console.log(sum(1, 6));
console.log(sum(1)); */


/* ================= Exercise 3 ================== */
/* let word1 = 'hello';
let word2 = 'world';

const stringCombine = (word1, word2) => {return word1 + ' ' + word2};

const word = stringCombine(word1, word2);
console.log(word); */


/* ================== Spread Operator ================= */
/* const arr1 = [1, 2, 3, 4, 5];
const arr2 = [0, 6, 7, 8, 9];
const arr3 = [0, ...arr1, 6, 7, 8, 9];
console.log(arr1, arr3) */

/* ================== Exercise 4 ================== */
/* const arr1 = [1, 2, 3];
const arr2 = ['A', 'B', 'C'];

const arr3 = [...arr1, ...arr2];
console.log(arr3);
 */

/* ============= Javascript shorthands ================== */
/* let userName;
let userInput = '';

if(userInput){
    userName = userInput;
}
else{
    userName = 'please enter your name.';
}

userName = userInput || 'please enter your name.';

console.log(userName); */

const num1 = Number('100');
const num2 = Number('100.01');

const num3 = +'100';
const num4 = +'100.01';

console.log(num1, num2, num3, num4, num1===num3, num2===num4)

