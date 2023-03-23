const result = document.querySelector("#result");
const button = document.querySelector('button');

const luckyNumber = {
    digitCount : 6, //숫자 6개
    maxNumber : 45, //최대 숫자 45
};

//math.floor() 함수를 사용하여 소수점 이하를 버리고 정수 값을 생성하며, 
//이를 mynumber set 객체에 저장합니다.
button.addEventListener("click", () => {
   
    let { digitCount, maxNumber } = luckyNumber;
    let myNumber = new Set(); //숫자가 중복되지 않게 저장할 set 생성

    while( myNumber.size < digitCount) {
        let number = Math.floor(Math.random() * maxNumber) + 1
        myNumber.add(number);}
        
    result.innerHTML = `${[...myNumber]}`;//set를 array로 변환
});
// button.addEventListener("click", () => {
    
//     let { digitCount, maxNumber } = luckyNumber;
//     let myNumber = new Set(); //숫자가 중복되지 않게 저장할 set 생성  
    
//     while(myNumber.size < digitCount)

//     let number = Math.floor(Math.random() * maxNumber) + 1);
//         myNumber.add(number);  }  