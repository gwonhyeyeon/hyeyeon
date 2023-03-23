const member1 = ["HTML", "CSS"];
const member2 = ["CSS" , "자바스크립트" , "리액트"];
const member3 = ["자바스크립트", "타입스크립트"];

const subjects = [...member1, ...member2, ...member3];
//console.log(subjects);
//전개 연산자(spread operator) 를 사용하여 subjects 배열에 병합합니다. 
const resultList = new Set();
subjects.forEach(subject => {//subjects 배열은 중복을 포함한 모든 요소들을 포함
    resultList.add(subject);
});
//console.log(resultist);

const result = document.querySelector("#result");
result.innerHTML = `
<ul>
${[...resultList]
.map(subject => `<li>${subject}</li>`)
.join("")}
</ul>`;
//아래와 같이 한 줄로 작성 가능
//result.innerHTML = `<ul>${[...resultList].map(subject => `<li>${subject}</li>).join("")}
