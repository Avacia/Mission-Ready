console.log('Connected');

const myObj = {
    age:21
}

myObj.name = "Phoebe";
myObj.lastName = "Su";
delete myObj.age;


/* ====================== This ====================== */
console.log(this === window);
a = 43;
console.log(window.a);

this.b = "MND";
console.log(window.b);
console.log(b);

/* ===================== This is inside the local scope - Object ===================*/
/* const person = {
    firstName: 'Rob',
    lastName: 'Petrie',
    greetings: function(){
        console.log(person.firstName);
        console.log("Hello", this.firstName);  *//* this = object when this is used inside the object */
  /*   }
}
person.greetings(); */


/* ============================= Class ========================== */
/* class User{
    constructor(fname, lname){
        this.firstName = fname
        this.lastName = lname
    }
} */

class User{
    constructor(first, last){
        this.firstName = first
        this.lastName = last
    }
}

const user1 = {
    firstName:"Sally",
    lastName:"Roger"
}

const user2 = {
    firstName:"Buddy",
    lastName:'Sorrel'
}


const user3 = new User("Phoebe", "Su");
const user4 = new User("Bonnie", )


/* =============== Example ===================== */

class Person{
    constructor(name){
        this.name = name
    }
    
    introduce(){
        console.log(`Hello, my name is ${this.name}`);
    }
}

const rob = new Person("Rob");
rob.introduce();


/* ==================== Exercise ====================*/

class Vehicle{
    constructor(model, manufacturer, year, color){
        this.model = model
        this.manufacturer = manufacturer
        this.year = year
        this.color = color
    }
    colorOfVehicle(){
        console.log(`The color of the vehicle: ${this.color}`)
    }
}

const myCar = new Vehicle("SUV", "volkswagen", 2023, "silver");
myCar.colorOfVehicle();