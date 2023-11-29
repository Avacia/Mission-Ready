console.log("Connected");


/* =============== Date Object ==================== */
const pastDate = new Date(1995, 11, 14, 3, 24, 0);
console.log(pastDate)


const myDate = new Date();
console.log(myDate);
console.log(myDate.getFullYear());
console.log(myDate.getMonth()); //It counts from index 0
console.log(myDate.getDay());
console.log(myDate.getHours());
console.log(myDate.getMinutes());
console.log(myDate.getSeconds());
console.log(myDate.toISOString());

const options={
    hour: "numeric",
    minute: 'numeric',
    day:'numeric',
    month:'numeric',
    year: 'numeric',
    weekday: 'long'
    /* numeric just the number, 2-digit shows two number digit. Short shows Mar for March, Long shows March.*/
};

const myFormattedDate = new Intl.DateTimeFormat('en-NZ', options).format(myDate);
console.log(myFormattedDate);


/* ===================== Exercise 1 ====================== */
const bday = new Date(1999, 0, 27);

switch(bday.getDate()){
    case 1:
        console.log(`My birthday is on the ${bday.getDate()}st of ${whatMonth(bday.getMonth())}`);
        break;
    case 2:
        console.log(`My birthday is on the ${bday.getDate()}nd of ${whatMonth(bday.getMonth())}`);
        break;
    case 3:
        console.log(`My birthday is on the ${bday.getDate()}rd of ${whatMonth(bday.getMonth())}`);
        break;
    default:
        console.log(`My birthday is on the ${bday.getDate()}th of ${whatMonth(bday.getMonth())}`);
}

function whatMonth(month){
    console.log(month)
    monthList = ['January', 'February', 'March', 'April', 'May', 'June', 
                'July', 'August', 'September', 'October', 'November', 'December'];
    return monthList[month];
}

const myBdayMonth = new Intl.DateTimeFormat("en-NZ", {month:'long'}).format(bday);
console.log(`My birthday is on the ${bday.getDate()} of ${myBdayMonth}`)

/* Exercise 2*/

const favNum=[3,10,100];
const minNum = Math.min(...favNum);
const maxNum = Math.max(...favNum)
console.log(minNum);
console.log(maxNum);
console.log(Math.pow(minNum, 2))


const fruits = ['banana', 'mango', 'lychee', 'watermelon'];
const num = getRandomNum();

function getRandomNum(){
    return Math.floor(Math.random()* 4);
    /* original = 0 - 0.99 */
}
console.log(`Fruit: ${fruits[num]}`);
