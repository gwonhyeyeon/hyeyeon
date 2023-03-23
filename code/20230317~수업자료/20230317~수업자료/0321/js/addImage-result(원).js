const today = new Date();
const hrs = today.getHours();
const imggeToToggle = document.getElementById("imageToToggle");

imageToToggle.src = hrs < 12? "../img/paris.jpg" : "../img/home.jpg";



function imageToToggle(){
    if(imageToToggle.style.display === "none"){
        imageToToggle.style.display = "block";
    } else {
        imageToToggle.style.display = "none";
    }
};