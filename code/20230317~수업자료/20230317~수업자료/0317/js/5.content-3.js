//내가 작성한 부분

// const title = document.getElementById("title");
// const userName = document.getElementById("name");
// const pfImage = document.getElementById("img");

//답안 부분

const title = document.getElementById("title");
const pic = document.getElementsByTagName("img");
const users = document.getElementsByClassName("user");


//if문을 활용한 toggle기능 

// title.addEventListener("click", function(){

//     if(title.innerText =="My Profile"){
//         title.innerText = "프로필";
//     }
//     else {
//         title.innerText = "My Profile";
//     }

// }) 


//삼항연산자 활용
title.addEventListener("click", function(){
    title.innerText = title.innerText == "My Profile" ? "내 프로필" : "My Profile";
});
//title.innerText == "My profile" ? "내 프로필" : "My profile";
//title 객체의 innerText 속성 값을 변경하지 않습니다.
//삼항 연산자는 단지 조건에 따라 내 프로필, 또는 마이 프로필 값을 반환할 뿐입니다. 
//첫 번째 부분 title.innerText = 는 반환된 값을 title.innerText 에 할당하는 역할을 합니다. 
//title 객체의 텍스트가 조건에 따라 교대로 변경됩니다. (토글 효과)

pic[0].addEventListener("click", function(){
    pic[0].src = pic[0].src.endsWith("../img/boy.png") ? "../img/pf.png" : "../img/boy.png"
    
});





for ( var i = 0; i< users.length; i++){
    users[i].addEventListener("click", function(){
        if(this.innerText == "이름:도레미"){
            this.innerText = "이름:진달래";
            this.style.fontWeight = "bold";
        }else if (this.innerText == "이름:진달래"){
            this.innerText = "이름:도레미";
            this.style.fontWeight = "normal";
        }
    })
}





//if문을 활용한 toggle로 수정해야 하는 부분

// userName.addEventListener("click", function(){

//     if( userName.innerText == "이름:도레미"){
//         userName.innerText = "이름:진달래";
//         userName.style.fontWeight = "bold"; 
//     }
//     else {
//         userName.innerText = "이름 : 도레미";
//     }

// }) 



// pfImage.addEventListener("click", function(){

//     if(pfImage.src =="../img/pf.png"){
//         pfImage.src = "../img/boy.png";
//         pfImage.style.width = '100px';
//         pfImage.style.height = '100px';
//     }
//     else {
//         pfImage.src =="../img/pf.png";
//     }

// }) 

