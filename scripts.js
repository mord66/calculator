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
    error:false,
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
            if (operands.operated == true || operands.error && true){
                displayBottom.textContent = "";
                operands.operated = false;
                operands.error = false;
            }
            if (displayBottom.textContent.length > 16){
                displayBottom.textContent = displayBottom.textContent +"";
            }
            else {
            displayBottom.textContent = displayBottom.textContent + e.target.value;
            }

            
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
    
    if (clickCount == 1 && displayBottom.textContent !=""){
        operands.second = parseInt(displayBottom.textContent);
        console.log(operands.second);
    }
    if (operands.operand == "divide" && operands.second ==0){
        operands.operated = true;
        displayTop.textContent ="";
        displayBottom.textContent = "ERROR";
        operands.error = true;
        clickCount = 0;
    }
    else if (operands.first == "" || operands.second == ""){
        displayBottom.textContent ="";
        displayTop.textContent = "";
        clickCount = 0;
    }
    else {
        let a = operate(operands.first, operands.second, operands.operand);
        displayTop.textContent = operands.first + " " + operands.operandSymbol + " " + operands.second + " " + "=" + a;
        displayBottom.textContent = a;
        operands.operated = true;
        clickCount = 0;
        operands.second = "";
    }
     
    }



)