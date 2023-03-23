const number1 = document.getElementById('number1');
const number2 = document.getElementById('number2');
const button = document.getElementById('calc');
const result = document.getElementById('result');

button.onclick = function() {
    result.innerHTML = getGCD(number1.value, number2.value);
}

function getGCD(number1, number2) {
    let gcd = 1;
    
    for(let i=2; i<=Math.min(number1, number2); i++){
        if(number1 % i === 0 && number2 % i === 0){
            gcd = i;
        }
    }
    return gcd;

}



