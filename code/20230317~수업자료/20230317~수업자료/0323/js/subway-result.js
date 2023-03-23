function* train() {
    yield "판교";
    yield "이매";
    yield "삼동";
    yield "경기광주";
    yield "초월";
    yield "곤지암";
    yield "신둔도예춘";
    yield "이천";
    yield "부발";
    yield "세종대왕릉";
    yield "여주";
}
//제너레이터 함수를 호출하여 gyenggang 이터레이터 객체를 생성하고,
//버튼 클릭 이벤트가 발생할 때마다 gyenggang이터레이터 객체에서 다음 값을 추출

let gyenggang = train();

const button = document.querySelector("button");
const result = document.querySelector("#result");


button.addEventListener("click", () => {
    let current = gyenggang.next(); //다음 값을 추출한다
    if(current.done !== true) {
        result.innerHTML = current.value;
    } else {
        result.innerHTML = "종점!";
        button.setAttribute("disabled", "disabled");
    }
});