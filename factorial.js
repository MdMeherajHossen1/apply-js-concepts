// factorial 
/*
2! = 2 x 1
3! = 3 x 2 x 1
4! = 4 x 3 x 2 x 1
5! = 5 x 4 x 3 x 2 x 1
6! = 6 x 5 x 4 x 3 x 2 x 1
7! = 7 x 6 x 5 x 4 x 3 x 2 x 1
*/
let factorial = 1;
for ( let i = 1; i <= 7; i++){
    factorial = factorial * i;
}
console.log(factorial);