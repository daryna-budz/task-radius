const num1 = +prompt("Enter first number");
const num2 = +prompt("Enter second number");
const operation = prompt("Enter math operation");

function math(num1,num2,operator){
    if(operator === "+"){
        return num1+num2;
    }else if(operator === "-"){
        return num1-num2;
    }else if (operator === "*"){
        return num1*num2;
    }else if (operator === "/"){
        return num1/num2;
    }else{
        return 0;
    }
}

console.log(math(num1,num2,operation))