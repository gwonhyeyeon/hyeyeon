const box = document.querySelector("#box");

box.addEventListener("click", (e) => {
    alert(`이벤트 발생 위치 : ${e.pageX}, ${e.pageY}`);
})

// 이벤트 객체 e의 pageX와 pageY 속성을 사용하여 얻을 수 있습니다. 
// 매개변수는 몰까요? 이벤트 발생위치? e가 하나만 들어가있다.