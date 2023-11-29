console.log("Connected");

/* =============================== Change the whole content inside body ====================================== */
/* document.body.innerHTML = '<h1> Hello World </h1>';
/* document.body.innerHTML = 'hello'; */
/* document.body.style.background = 'aqua';
document.body.style.background =
  "linear-gradient(to right, rgba(255, 192, 203, 0.5), rgba(0, 128, 255, 0.5))"; */

function changeColor(){
    if(document.body.style.background == 'aqua'){
        document.body.style.background =
            "linear-gradient(to right, rgba(255, 192, 203, 0.5), rgba(0, 128, 255, 0.5))";
    }
    else{
        document.body.style.background = 'aqua';
    }  
};

/* const colors = ['black', 'white', 'red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
let count = 0;

function colorPlate(){
    document.body.style.background = colors[count]
    if(count > colors.length){
        count = 0
    }
    else{
        count ++;
    }
}; */

/* ================== To select the first item in your code and change its content. =============================== */
document.querySelector("h1").textContent = "My title changed magically.";

/* ================== To select the all item that meet the inquiry in your code and change its content. =========== */
let lists = document.querySelectorAll("h1");
for(list in lists){
    document.querySelectorAll('h1')[list].style = 'color: blue; font-size: 20px;';
    document.querySelectorAll('h1')[list].textContent = "hi";
}

/* ================== getElementById ==========================*/
document.getElementById('p-tag').style.color = 'red';
document.getElementById('h2').style.background = "linear-gradient(to right, rgba(255, 192, 203, 0.5), rgba(0, 128, 255, 0.5))";


/* ========================= Exercise 1 ============================= */
let countUp = 0;
function count(){
    countUp ++
/*     document.querySelector('#counter').textContent = `${countUp}`; */
    document.getElementById('counter').textContent = countUp;
};

/* .addEventListener(always two parameter) 
        is the method in our JS code is the preferred approach over adding an on event inline onto html element. Takes 2 main parameter:
        first argument: the event it will listen.
        second argument: function we want to run when the event is triggered.
*/

/* ================== Add Event Listener ===================== */
const myDiv = document.getElementById("divId");


myDiv.addEventListener('mouseover', function(){
    myDiv.style.backgroundColor = "aqua";
});

myDiv.addEventListener('mouseout', changeToWhite);



function changeToWhite(event){
    event.target.style.backgroundColor = 'white';
};


/* =================== Getting text from input fields ==========================*/
/* function logValue(e) {
    console.log(e.target.value);
}

const inputEl = document.querySelector('#label-2');
inputEl.addEventListener('#label-2', logValue);
 */

/* function logValue(e){
    const num = e.target.value.length;
    document.getElementById('ex2').textContent = num;
} */

const num1 = document.getElementById('1');
const num2 = document.getElementById('2');
const result = document.getElementById('ex3');
const sumbtn = document.getElementById('btn');

sumbtn.addEventListener('click', getResult);

function getResult(){
    result.textContent = sum(num1.value, num2.value);
    return;
}

function sum(num1, num2){
    console.log(num1, num2)
    count = parseInt(num1) + parseInt(num2);
    return `${num1} + ${num2} = ${count}`;
}