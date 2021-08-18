/*
function getFactorial (number){
    let factorial = 1;
    for (let i = 1; i <= number; i++){
        factorial = factorial * i;
    }
       return factorial;
}

const firstFactoril = 8;
const myFactoril = getFactorial(firstFactoril);
console.log(myFactoril);
*/



/*
function Factorial (number){
    let fact = 1;
    let i =1;
    while (i <= number){
        fact = fact * i;
        i++;
    }
    return fact;
}

const myFactoril = Factorial(7);
console.log(myFactoril);

*/


function getFactorial (number){
    let factorial = 1;
    for (let i = number; i >= 1; i--){
        factorial = factorial * i;
       
    }
    return factorial;
}

const myFactoril = getFactorial(7);
console.log(myFactoril);