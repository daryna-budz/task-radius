const radius = +prompt("Please enter radius");
function calcSquare(radius){
    return Math.pow(radius,2)*Math.PI;
}
console.log(calcSquare(radius))