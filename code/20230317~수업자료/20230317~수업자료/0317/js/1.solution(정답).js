const n = document.getElementById("number1");
const m = document.getElementById("number2");
const button = document.getElementById("calc");
const result = document.getElementById("result");

button.onclick = function() {
    result.innerHTML = getGCD(n.value, m.value);  
}

function getGCD(n, m) {

 let max = n > m ? n : m;
 let GCD = 0;
 for( let i = 1; i <= max; i++) {
    if(n % 1 === 0 && m % i === 0) {
        GCD = i;
    }
 }
return GCD;
}