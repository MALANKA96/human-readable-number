module.exports = function toReadable(number) {
    if (number === 0) return "zero";
    let bibliotec1_19 = ["","one","two","three","four","five","six","seven","eight","nine","ten","eleven","twelve","thirteen", "fourteen","fifteen","sixteen","seventeen","eighteen","nineteen"]; // 
    if (number < 20) return bibliotec1_19[number];
    let bibliotec20_90 = ["","","twenty","thirty","forty","fifty","sixty","seventy","eighty","ninety"];
    if (number < 100) {
    let x = Math.trunc(number / 10); //десятки числа
    let y = number % 10; //еденицы числа
    if ( y == 0) { return (bibliotec20_90[x] + "" + bibliotec1_19[y]);} 
    else {return (bibliotec20_90[x] + " " + bibliotec1_19[y]);}
    };
    let z = Math.trunc(number / 100); //сотни числа
    let x = Math.trunc((Math.trunc(number % 100))/10); //десятки числа
    let y = number % 10; //еденицы числа
    let xy= number % 100 //десятки еденицы числа
     if (x === 0 && y === 0) {return bibliotec1_19[z] + " hundred";}
     else if (xy < 20) {return bibliotec1_19[z] + " hundred " + bibliotec1_19[xy];} 
     else if (xy < 100 && y == 0 ) {return bibliotec1_19[z] + " hundred " + bibliotec20_90[x] + "" + bibliotec1_19[y];} 
     else  {return bibliotec1_19[z] + " hundred " + bibliotec20_90[x] + " " + bibliotec1_19[y];}
        
};
