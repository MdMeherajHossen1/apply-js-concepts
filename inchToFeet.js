
function  inchToFeet (inch){
    var feet = inch / 12;
    return feet;
}




var inches = 132;
var feet = inchToFeet(inches);
console.log(feet);


var dadaInches = 144;
var feet = inchToFeet(dadaInches) ;
console.log(feet);

var dadiInches = 156;
var feet = inchToFeet(dadiInches);
console.log(feet);

var naniInches = 166;
var feet = inchToFeet(naniInches);
console.log(feet);

var nanaInches = 320;
var feet = inchToFeet(nanaInches);
console.log(feet);



function milesToKm (miles){
    var km = miles * 1.60934;
    return km;
}

var dohaToDhaka = 200;
var km = milesToKm(200);
console.log('dhaka theke doha er durutto', km);

var sanayaToDoha = milesToKm(728);
console.log(sanayaToDoha);