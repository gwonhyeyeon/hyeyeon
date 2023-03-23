const title = document.getElementById("title");
const userName = document.getElementById("name");
const pfImage = document.getElementById("img");




title.addEventListener("click", function(){
    title.innerText = title.innerText == "My Profile" ? "내 프로필" : "My Profile";
});

userName.addEventListener("click", function(){
    if( userName.innerText == "이름 : 도레미"){
        userName.innerHTML = "이름 : <b>민들레</b>";
   }else if( userName.innerHTML == "이름 : <b>민들레</b>"){
    userName.innerText = "이름 : 도레미"
   }

})





pfImage.addEventListener('click', function(){
    pfImage.src = "../img/boy.png"
})

function imgtoggle() {
    pfImage.addEventListener("click", function(){
        pfImage.classList.toggle("img")});
}

imgtoggle();


// const img1 = "../img/pf.png";
// const img2 = "../img/boy.png";

// pfImage.addEventListener("click", function(){
//     pfImage.src = pfImage.src.endswith("../img/pf.png") ? "../img/boy.png" : "../img/pf.png"
// })



// pfImage.addEventListener("click", function(){
//     if( pfImage.getAttribute("src") == "../img/pf.png") {
//         pfImage.src = "../img/boy.png"
//     } 
//     // else if( pfImage.getAttribute("src") == "../img/boy.png"){
//     //     pfImage.src = "../img/pf.png"

// })
// console.log(pfImage.getAttribute("src"));


// pfImage.onclick = function() {
//     if ( pfImage.src == "..//img/pf.png"){
//         pfImage.src = "..//img/boy.png";
//         pfImage.style.width = '100px';
//         pfImage.style.height = '100px';
//     } else if (pfImage.src == "..//img/boy.png"){
//         pfImage.src = "..//img/pf.png"
//     }
// }

