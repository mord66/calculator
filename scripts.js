const add = (a,b)=> a+b;
const substract = (a,b)=>a-b;
const divide = (a,b)=>a/b;
const multiply = (a,b) => a*b;

function operate(a, b, operation){
    a = parseInt(a);
    b = parseInt(b);
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



const displayTop = document.querySelector(".display .topp");
const displayBottom = document.querySelector(".display .bottom");
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
const addButton = document.getElementById("add");
const substractButton = document.getElementById("substract");
const divideButton = document.getElementById("divide");
const multiplyButton = document.getElementById("multiply");
const equalsButton = document.getElementById("equals");
const pointButton = document.querySelector(".point");
const numberButtons = document.querySelectorAll(".number");
const operatorButtons = document.querySelectorAll(".operator");
const operands = {
    first:"",
    second:"",
    operand:"",
    operandSymbol:"",
    operated:false,
}
let clickCount = 0;
operatorButtons.forEach(function(i){
    i.addEventListener("click", function(e){
        if (clickCount == 0){
            if (displayBottom.textContent !=""){
                operands.first = parseInt(displayBottom.textContent);
                operands.operandSymbol = e.target.value;
                operands.operand = e.target.id;
                displayTop.textContent = operands.first + " " + operands.operandSymbol;
                displayBottom.textContent = "";
                clickCount +=1;
                console.log(operands.first);
            }
            }
        
    }   
    )
    })



numberButtons.forEach(function(i){
    i.addEventListener("click", function(e){
            console.log(operands.operated);
            if (operands.operated == true && displayBottom.textContent.length <15){
                displayBottom.textContent = "";
                operands.operated = false;
            }
            displayBottom.textContent = displayBottom.textContent + e.target.value;
            }
    )
            })

clearButton.addEventListener("click", ()=>{
    displayBottom.textContent  = "";
    displayTop.textContent = "";
})

deleteButton.addEventListener("click", ()=>{
    displayBottom.textContent = displayBottom.textContent.slice(0, -1);
})

equalsButton.addEventListener("click",function(){
    
    if (clickCount == 1){
        operands.second = parseInt(displayBottom.textContent);
    }
    if (operands.second != ""){
        let a = operate(operands.first, operands.second, operands.operand);
        displayTop.textContent = operands.first + " " + operands.operandSymbol + " " + operands.second + " " + "=" + a;
        displayBottom.textContent = a;
        operands.operated = true;
        clickCount = 0;
        operands.second = "";
    }
    console.log(clickCount);
    console.log(operands.second);

})