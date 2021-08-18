function factorial (number){
     if ( number == 1){
         return 1;
     }
     return number * factorial(number -1);
}

const myFactoril = factorial(7);
console.log(myFactoril);



function factorial1 (n){
    if (n == 1){
        return 1;
    }
    return   n * factorial1(n-1);
}

const myFactoril2 = factorial1(9);
console.log(myFatorial2);


function nFactorial (n){
    if(n == 1){
        return 1;
    }
    return n * nFactorial(n-1);
}

const myFactoril1 = nFactorial(8);
console.log(myFactoril);