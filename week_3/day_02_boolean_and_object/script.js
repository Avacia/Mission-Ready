console.log("Connected")
/* 
console.log(Boolean(false));
console.log(Boolean(0));
console.log(Boolean(''));
console.log(Boolean(null));
console.log(Boolean(undefined));
console.log(Boolean(NaN));


const person={
    firstName: "Yen",
    lastName: "Wang",
    age:24,
};

const dog = {
    name:"Fido",
    weight:40,
    breed:"Mixed",
    loves:['walks', 'fetching balls']
};
console.log(dog);
 */
/* const cat={
    firstName:"Asuna",
    lastName:"Wang",
    weight:1200,
    breed:"Pure Persian",
    loves:["Being Cuddle, sleep, watching TV"],
    favouriteColor:'white'
};

console.log(cat);
const age = "Age";
cat[age] = 1;
console.log(cat.firstName);
console.log(`This is ${cat.firstName} ${cat.lastName}, and their favourite color is ${cat.favouriteColor}.`)


if (cat.weight > 2000){
    alert("Need to do some exercise!!!!!!")
}
else if(cat.weight < 1000){
    alert("She need more food or need to see the doctor asap!!!")
}
else{
    alert("She is good for her weight")
} */

/* const rectangle = {
    length:10,
    width:50
}

console.log(`Area of the rectangle is ${rectangle.length * rectangle.width}`);
console.log("Area of the rectangle is: ", rectangle["length"] * rectangle["width"]) */

/* let person = {
    firstName: "John",
    lastName: "Don"
}

person.firstName = "Yen";
person.lastName = "Wang";
person.favouriteColor = "White"
console.log(person) */

let newPerson = {
    firstName: "Kirito",
    lastName: "Wang",
    favouriteNumber: "10",
    favouriteDay: "Friday"
};

console.log(newPerson);
newPerson.favouriteFood = "Sushi";
console.log(newPerson);

delete newPerson.favouriteDay;
newPerson.favouriteNumber *= 2;
console.log(newPerson);
