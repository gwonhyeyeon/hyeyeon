const container = document.querySelector("#container");
const pics = ["image0.jpg", "image1.jpg", "image2.jpg", "image3.jpg", "pic1.jpg"];
container.style.backgroundImage = `url(../image/${pics[0]})`;

const arrow = document.querySelectorAll(".arrow");


let i =0;


arrow.forEach( arrow => {
    arrow.addEventListener("click", (e) =>{
        if(e.target.id === "left"){
            i --;
            if(i < 0) {
                i = pics.length - 1;
            }
        }
        else if(e.target.id ==="right"){
            i ++;
            if( i >= pics.length)
            i=0;
        }
        container.style.backgroundImage = `url(../image/${pics[i]})`
    })

})

// ====================================================
// arrow.forEach((arrow)=> {
//     arrow.addEventListener("click", (e) => {
//         if (e.target.id === "left") {
//             //이전이미지
//             i = i === 0 ? pics.length -1 : i -1;
//         } else if (e.target.id === "right") {
//             i = (i + 1) % pics.length;
//            console.log("새로운 인덱스 값 :", i);
//         }
//         container.style.backgroundImage = `url(../image/${pics[i]})`;
//     });
// });


// if(e.target.id === "left") : 클릭된 요소의 id가 "left"인지 확인합니다. 
// 만약 "left" 화살표를 클릭한 경우, 이전 이미지를 표시합니다. 

// i = i === 0? pics.length - 1 : i - 1; : 현재 이미지 인덱스 i가 0인지 확인합니다. 
// 만약 i가 0이면, 이미지 배열의 마지막 인덱스로 이동합니다 (pics.length - 1);
// 그렇지 않으면 i를 1 감소시켜 이전 이미지로 이동합니다 (i - 1)
// else if (e.target.id === "right") : 클릭된 요소의 id가 "right" 인지 확인합니다. 
// 만약 "right" 화살표를 클릭한 경우, 다음 이미지를 표시합니다. 


// i = (i + 1) % pics.length : 이미지 인덱스 i 를 1 증가시킨 다음,
// 이미지 배열의 길이 (pics.length)로 나눈 나머지 값을 계산합니다. 
// 이렇게 하면 이미지 배열의 끝에 도달하면 인덱스가 다시 0으로 되돌아가기
// 배열의 첫 번째 이미지로 돌아갑니다. 

// 두 번째 이미지에 있다면, i의 초기값은 1입니다. 오른쪽을 눌렀을 때 
// (인덱스는 0부터 시작하기 때문에 첫 번째 이미지의 인덱스는 0, 두 번째 이미지의 인덱스는 1입니다.)
// 오른쪽 화살표는 누르면 i의 값이 1 증가
// (i + 1)% pics.length 여기서 i + 1 은 1 + 1 이므로 2입니다. 
// pics.length는 이미지 배열의 길이로 5입니다
// 따라서 (2) % 5는 2가 됩니다. 나머지니까
// 결과적으로 오른쪽 화살표를 누른 후 i 의 값은 2가 됩니다. 
// 이미지 배열에서 세번째 이미지의 인덱스를 나타냅니다. 왜 0 1 2 니까 