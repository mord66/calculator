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
    operation:false,
    equals:false,
}


numberButtons.forEach(function(i){
    i.addEventListener("click", function(e){
           if (operands.operation == false){ 
            if(displayBottom.textContent.length < 15){
                displayBottom.textContent = displayBottom.textContent + e.target.value;
                }
           }
           else if (operands.operation == true){
            if(displayBottom.textContent.length < 15){
                displayBottom.textContent = displayBottom.textContent +e.target.value;
            }
           }
        })
    });


clearButton.addEventListener("click", ()=>{
    displayBottom.textContent  = "";
    displayTop.textContent = "";
})

deleteButton.addEventListener("click", ()=>{
    displayBottom.textContent = displayBottom.textContent.slice(0, -1);
})
let clickCount = 0;
operatorButtons.forEach(function(i){
    i.addEventListener("click", function(e){
        if (clickCount == 0) {
        displayBottom.textContent = displayBottom.textContent + e.target.value;
        operands.first = displayBottom.textContent;
        operands.first = parseInt(operands.first)
            operands.operand = e.target.id;
            operands.operandSymbol = e.target.value;
            if (operands.second == ""){
            displayTop.textContent = operands.first + " " + e.target.value;
            }
            else if (operands.second != ""){
                displayTop.textContent = b + " " + e.target.value;
            }
            clickCount +=1;
            displayBottom.textContent = "";
            console.log(operands.first);
            console.log(operands.second);
        }
        else if (clickCount >= 1){
            operands.operation = true;
            operands.operand = e.target.id;
            operands.second = displayBottom.textContent;
            operands.second = parseInt(operands.second);
            operands.operandSymbol = e.target.value;
            b = operate(operands.first, operands.second, operands.operand);
            displayBottom.textContent = b;
            displayTop.textContent = b + " " + operands.operandSymbol;
            displayBottom.textContent = "";
            clickCount = 0;
        }
        })

    })

equalsButton.addEventListener("click",function(){
    operands.equals == true;
    displayBottom.textContent = displayBottom.textContent + numberButtons.value;
    operands.second = parseInt(displayBottom.textContent);
    displayTop.textContent = operands.first + " " + operands.operandSymbol + " " + operands.second;
    let a = operate(operands.first, operands.second, operands.operand);
    displayTop.textContent = operands.first + " " + operands.operandSymbol + " " + operands.second + " " + "=" + a;
    console.log(operands.first);
    console.log(operands.second);
    displayBottom.textContent = a;
    clickCount = 0;
    console.log(operands.first);
    console.log(operands.second);

})