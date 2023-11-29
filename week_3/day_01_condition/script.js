/* console.log("Connected");
let x = 1;
let y = 1;
let z = (x == y);

if (z == true){
    console.log("The condition is true.")
}

else{
    console.log("The condition is false.")
} */

/* console.log("Connected")
let age = prompt("Please input your age: ");

if (age < 18){
    console.log("Damn! You are still young.")
}
else if(age == 18){
    console.log("Congrates, WELCOME TO HELL.")
}

else{
    console.log("GG~ May God Bless us.")
} */


/* console.log("Connected");
let input = prompt("Please input your favourite number: ");

if (input > 0){
    console.log("The number that you had input is: ", input, " It is a positive number.");
}
else if(input === 0){
    console.log("The number that you had input is: ", input, " It is 0.");
}
else{
    console.log("The number that you had input is: ", input, " It is a negative number.");
} */


/* console.log("Connected");
let myString = "1 apple";
let i = 7;

while (i >=0){
    if(myString[i] === 'a'){
        console.log("True");
        i -= 1;
        console.log(i);
    }
    else{
        console.log("False letter.")
        i -= 1;
        console.log(i);
    }
}

while (i >=0){
    myString[i] === 'a' ? console.log(true) : console.log(false);
    i -= 1;
    console.log(i);
} */


/* const word = 'hippopotamus';

word.length > 10 ? console.log(true) : console.log(false); */

/* const age = 70;
const premium = true;
const coupon = false;

age > 65 && (premium ||  coupon) ? 
    console.log("You have the special offer") : console.log("You are not qualify for the special offer"); */

/* let fruit = 'banana';

switch(fruit){
    case 'orange':
        console.log("It is orange.");
        break;
    
    case 'banana':
        console.log("It is banana.");
        break;
    
    case 'apple':
        console.log("It is apple.");
        break;

    default:
        console.log("Fruit not found.");
} */

let day = "Monday";

/* switch (day){
    case "Monday":
        console.log("It is a working day.");
        break;
    case "Tuesday":
        console.log("It is a working day.");
        break;
    case "Wednesday":
        console.log("It is a working day.");
        break;
    case "Thursday":
        console.log("It is a working day.");
        break;   
    case "Friday":
        console.log("It is a working day.");
        break;   
    case "Saturday":
        console.log("It is a holiday.");
        break;   
    case "Sunday":
        console.log("It is a holiday");
        break;
    default:
        console.log("Go listen to Jungkook-'Seven' then you will know what day is today"); 
}*/

/* switch(day){
    case "Monday":
        console.log("It is a working day.");
        break;
    case "Tuesday" || "Wednesday" || "Thursday" || "Friday":
    case "Saturday":
        console.log("It is a holiday.")
        break;
    case "Sunday":
} */

let grade = prompt("Input your grade: ");
let final_grade = Math.trunc(Number(grade) / 10);
console.log(final_grade)

switch(final_grade){
    case 10:
        console.log("Congrates! You've got 100%. A grade.")
        break;
    case 9:
        console.log("A grade.")
        break;
    case 8:
        console.log("B grade.")
        break;
    case 7:
        console.log("C grade.")
        break;
    case 6:
        console.log("D grade.")
        break;
    case 5:
    case 4:
    case 3:
    case 2:
    case 1:
    case 0:
        console.log("F grade.")
        break;

    default:
        console.log("Please input a proper number.");
}
