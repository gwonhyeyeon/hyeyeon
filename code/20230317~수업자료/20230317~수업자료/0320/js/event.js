// (1)이벤트리스너, 함수명
function changeBackground() {
    document.body.style.backgroundColor = "green";
}

const button = document.querySelector("button");
button.addEventListener("click", changeBackground);
// ===========================================

// (2) 화살표 함수 사용
// const button = document.querySelector("button");
// button.addEventListener("click", () => {
//     document.body.style.backgroundColor = "green";
// })

// ============================================
// (3) 웹 요소에 직접 연결하기

// const button = document.querySelector("button");

// button.onclick = function () {
//     document.body.style.backgroundColor = "green";
// }
// ==========================================
// 이벤트리스너, 익명함수 사용

// const button = document.querySelector("button");


// button.addEventListener("click", function(){
//     document.body.style.backgroundColor = "green";
// })

// ==============================

// function changeBackground() {
//     document.body.style.backgroundColor = "green";
// }
// const button = document.querySelector("button");
// button.onclick = changeBackground;

// 경고창이 안뜨는 이유는?
// 버튼요소에 대한 onclick이벤트를 이미 설정했기 때문입니다. 
// onclick이벤트 충돌이 발생하고, 경고창이 표시되지 않게 됩니다. 
// 대부분의 우선순위 모든 브라우저에서는 자바스크립트 코드의 이벤트 핸들러가 우선적으로 실행됩니다. 
