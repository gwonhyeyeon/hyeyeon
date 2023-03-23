var sum = 0;

function clac(cBox) {
    //체크되면 cBox(checkbox 객체) 객체가 checked 상태가 되고
    if(cBox.checked)
    //해당 객체의 value 값을 더함
     sum += parseInt(cBox.value);
    else
     sum -=parseInt(cBox.value);
    //합산 결과를 id = sumtext인 객체에 전송
    //getElementById로 연산을 하는 방법
    //1) 함수 내부 변수에 메소드를 대입해 객체 변수 생성
    //객체에.메소드를 활용해 정보 입, 출력
    //2) document 또는 innerHTML 등을 활용해 객체가 가진 정보를 태그에 전송
    document.getElementById("sumtext").value = sum; 
}

