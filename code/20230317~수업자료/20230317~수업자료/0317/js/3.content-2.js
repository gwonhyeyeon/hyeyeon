const title = document.getElementById("title");
const userName = document.getElementById("name");
const pfImage = document.getElementById("img");

title.onclick = function() {
    title.innerText = "프로필";
}
userName.onclick = function() {
    userName.innerHTML = "이름 : <b>민들레</b>";
}
pfImage.onclick = function() {
    pfImage.src = "../img/boy.png";
    pfImage.style.width = '100px';
    pfImage.style.height = '100px';
}