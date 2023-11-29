console.log('Connected');



/* ================================================ For Loop ====================================================== */
/* const foods = ['salad', 'pie', 'pickles', 'scones'];
for(i = 0; i < foods.length; i++){
    console.log(`I like ${foods[i]}.`);
}

for(food in foods){
    console.log(`I like ${foods[food]}.`);
}

for(food of foods){
    console.log(`I like ${food}.`);
} */




/* ================================================ Prompt ========================================================== */
/* let sign = prompt("Are you feeling lucky?");
console.log(sign); */

/* let age = prompt("Please enter your age: ");

if(Number.isInteger(Number(age)) == true && Number(age) >= 18){
    console.log('You are legal to drink beer.')
}

else if(Number.isInteger(Number(age)) == false){
    console.log('Please enter a value number.')
}

else{
    console.log('Please come back when you are 18+.')
} */




/* ======================================================== While Loop ================================================== */
/* let guess;
const secretNum = Math.round(Math.random()* 100);
console.log(secretNum)
while (guess != secretNum){
    guess = prompt("Guess a number between 0 ~ 100");
    if(Number.isInteger(Number(guess)) == true){
        (guess == secretNum) ? console.log(`Your guess is ${guess} & it is a correct number.`) : console.log(`Your guess is ${guess}, it is incorrect. Please guess again.`)
    }
    else{
        console.log('Please enter a value number.')
    }
} */



/* ================================================= Break and Continue =============================================== */
/* const letters = 'Hell@ the#e'
const errorLetters = ['!', '@', '#', '$']

for(letter of letters){
    for(errorLetter of errorLetters){
        if(letter == errorLetter){
            console.log('Error letter occur')
            break;
        }
    }
    console.log(letter);
}


for(letter of letters){
    switch(true){
        case letter == '!':     
        case letter == '@':     
        case letter == '#':     
        case letter == '$':
            console.log('Error letter occur')
            break;
        default:
            console.log(letter);        
    }
} */


/* ============================================ For...in Loop =======================================================*/

/* const student = {
    name:'Rob',
    age:5,
    isAdmin: true,
}

for(key in student){
    console.log(key);
    console.log(student[key]);
} */


/* const user={
    name:'John',
    age:50,
    isAdmin:true
};
for (key in user){
    (key == 'age') ? console.log(user[key]) : console.log(user);
}
 */

/* const myFavNumbers={
    num1: 1,
    num2: 2,
    num3: 3
}
let number = 0;
for(num in myFavNumbers){
    number += myFavNumbers[num];
}
console.log(number); */


/* const user=[
    {
        name:'John',
        age:50,
        isAdmin:true
    },
    {
        name:'Nathan',
        age: 'unknown',
        isAdmin:false
    }
];
for (key of user){
    for(value in key){
        console.log(key[value]);
    }
} */