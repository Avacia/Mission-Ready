console.log('Connected');

/* =========================== Array Methods ============================ */
const iceCreams = ['vanilla', 'chocolate', 'matcha'];

iceCreams.push('raspberry');
console.log(iceCreams);

/* push add the object to the end of the array. */

iceCreams.pop();
console.log(iceCreams);

/* pop remove the object of the last element of the array. */

iceCreams.unshift("Rum and Raisin");
console.log(iceCreams);

/* unshift add the object to the front of the array. */

iceCreams.shift();
console.log(iceCreams);

/* shift remove the object of the starting element of the array. */



/* =============================== Array Split ============================== */
const stringIceCream = 'vanilla chocolate matcha';
const splitIceCream = stringIceCream.split(" ", 2);
console.log(splitIceCream);

/* split function will seperate the string to array and split with the condition that is given in the first parameter.
 2nd parameter strict the split function that how many items will be taken to split. */



 /* ================================= Array Join ============================= */
const joinIceCream = iceCreams.join(" ");
console.log(joinIceCream);

/* join function combine element in array to become a string element with the value pass in the parameter. */



/* ============================ Array Slice ============================= */
const sliceIceCream = iceCreams.slice(1);
const sliceIceCream2 = iceCreams.slice(0,3);
console.log(sliceIceCream);
console.log(sliceIceCream2);

/* slice function slice off the element in the array to the correspond position. If there is two parameter, 
it will slice off the elements outside the range.(not include the last index just like loop)*/


/* ====================== Exercise ========================*/
const sliceEx = ['html', 'css', 'Js', 'react'];
const getJs = sliceEx.slice(2,3);
console.log(getJs);



/* ======================== Array Splice =========================== */
const numberSplice = [0, 1, 2, 3, 4, 5];
const resultNumberSplice = numberSplice.splice(1, 1, 'pen');
console.log(numberSplice);

/* splice function change the value of the first parameter(index position) and 2nd parameter(number of element in 
    the array will be select) to the value of the 3rd parameter(value).

    resultNumberSplice will be the value that is deleted just like slice.*/



/* ============================ Exercise 2 ============================ */
const spliceEx = ['html', 'css', 'react'];
const result = spliceEx.splice(2, 0, 'JS')
console.log(spliceEx);



/* ======================== Array forEach() ===========================*/
iceCreams.forEach(function(iceCream){
    console.log(iceCream + " Ice Cream");
});

iceCreams.forEach((iceCream) =>{ console.log(iceCream + " Ice-Cream")});
/* forEach function is like a loop that access to every element in array and add the value that we want to the element. */



/* ================== Array Map() ==========================*/
const orderedIceCreams = iceCreams.map((iceCream, index)=>{return `Flavour ${index + 1}: ${iceCream}`;})
console.log(orderedIceCreams);

/* Map function do the exactly the same thing as forEach function, but instead of printing out the final result, it return the
    value. */



/* ================ Exercise 3 ================ */
const array3 = [1, 2, 3, 4, 5];
const mappedArray = array3.map((number) => {return number * 2});
console.log(mappedArray)



/* ==================== Array filter() ======================= */
const iceCreamCosts = [2.95, 4, 5];
const expensiveIceCreamCost = iceCreamCosts.filter((cost, index, array) =>{ return cost > 3;});
console.log(expensiveIceCreamCost);

/* filter function will pass through the element the fit the requirement that is given and return the element that is true. */



/* ============== Exercise 4 ================= */
const array4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumber = array4.filter((num, index, array) =>{return num % 2 == 0;});
console.log(evenNumber)

const evenNumber2 = array4.filter((num, index, array) =>{return !(num % 2);});
console.log(evenNumber2)



/* ================== Array indexOf() ====================== */
const chocIndex = iceCreams.indexOf('chocolate', 2);
console.log(chocIndex);

/* indexOf function can find the index position inside the array. first parameter is the element that we want to find and the 
    second parameter is the starting position that we are going to find.(you don't have to have second parameter. -1 means not found.) */



/* =================== Array includes() ======================== */
/* const arrayOfThings = ['books', 'pens', 'paper', 'pencils', 'words'];
const userGuess = prompt("Guess what I have: ");
const guess = arrayOfThings.includes(userGuess);
console.log(guess);
 */

/* ================ Homework =================== */
const str1 = "good MORNING to you.";
const str2 = str1.toLowerCase();
const wordList = str2.split(" ");
const words = wordList.map((word) =>{
    firstLetter = word[0].toUpperCase();
    restLetter = word.slice(1)
    return(firstLetter + restLetter)
});

const sentence = words.join(" ");
console.log(sentence)
