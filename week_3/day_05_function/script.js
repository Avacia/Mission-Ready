console.log('Connected');

/* function myFirstFunction(){
    console.log("We don't have much action yet, I just want to see what I can show behind the scene")
}

myFirstFunction();
 */


/* ================Function with Parameter===================== */
/* function funcWithParameter(str1, str2){
    console.log(str1, str2);
}

funcWithParameter("Yen", 'Wang')
 */


/* =================Exercise 1==================== */
/* function showMyBrekkie(array){
    for(i of array){
        console.log(`I like to eat ${i}`);
    }

    console.log('I like to eat ' + array.join(', '));
}

const favFood = ['sushi', 'kastu don', 'tori karaage', 'sashimi', '五花肉']
showMyBrekkie(favFood) */


/* ========================= Function with return =============================== */
/* function sum(num1, num2){
    return num1 + num2;
}

const number = sum(3, 4);
console.log(number);

(number === 7) ? console.log('The answer is right.') : console.log('The answer is wrong.');
 */


/* =============================Exercise 2 ======================================= */
/*  function takeString(str1){
    return (str1 === "") ? true : false;
 }

const tOrF = takeString("");
console.log(tOrF);
 */


/* =========================== Function in Objects ==================================*/ 
/* const person = {
    firstName : "John",
    lastName : "Doe",
    greeting: function(name){
        console.log(`Hi ${name}, weather is good today.`);
    }
};

person.greeting("Phoebe"); */


/* ============================== Exercise 3 ====================================== */
const life = {
    age: 21,
    final_age: 90,
    life_left: function(age_dif){
        months = age_dif * 12;
        weeks = months * 4;
        days = weeks * 7;
        console.log(`You have ${Math.round(days)} days left / 
         ${Math.round(weeks)} weeks left / 
         ${Math.round(months)} months left / 
         ${age_dif} years left.`)
    }
};

age_dif = life.final_age - life.age;
console.log(life.life_left(age_dif));


function lifeLeft(age){
    let left_age = 90 - age;
    left_months = left_age * 12;
    left_weeks = left_months * 4;
    left_days = left_weeks * 7;
    return [left_age, left_months, left_weeks, left_days];
}

const array1 = lifeLeft(21);
console.log(`You have ${array1[3]} days left / 
         ${array1[2]} weeks left / 
         ${array1[1]} months left / 
         ${array1[0]} years left.`);