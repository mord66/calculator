const add = (a,b)=> a+b;
const substract = (a,b)=>a-b;
const divide = (a,b)=>a/b;
const multiply = (a,b) => a*b;

function operate(a, b, operation){
    if (operation == "add"){
        return add(a,b);
    }
    else if (operation =="substract"){
        return substract(a,b);
    }
    else if (operation == "divide"){
        return divide(a,b);
    }
    else if (operation =="multiply"){
        return multiply(a,b);
    }
}

const display = document.querySelector(".display span");
const deleteButton = document.querySelector(".delete");
const clearButton = document.querySelector(".clear");
const nineButton = document.querySelector(".nine");
const eightButton = document.querySelector(".eight");
const sevenButton = document.querySelector(".seven");
const sixButton = document.querySelector(".six");
const fiveButton = document.querySelector(".five");
const fourButton = document.querySelector(".four");
const threeButton = document.querySelector(".three");
const twoButton = document.querySelector(".two");
const oneButton = document.querySelector(".one");
const zeroButton = document.querySelector(".zero");
const addButton = document.querySelector(".add");
const substractButton = document.querySelector(".substract");
const divideButton = document.querySelector(".divide");
const multiplyButton = document.querySelector(".multiply");
const equalsButton = document.querySelector(".equals");
const pointButton = document.querySelector(".point");
const numberButtons = document.querySelectorAll(".number");

numberButtons.forEach(function(i){
    i.addEventListener("click", function(e){
        display.textContent = display.textContent + e.target.value;
    })
})
clearButton.addEventListener("click", ()=>{
    display.textContent  = "";
})

deleteButton.addEventListener("click", ()=>{
    display.textContent = display.textContent.slice(0, -1);
})