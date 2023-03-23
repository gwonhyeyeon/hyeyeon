const today = new Date();
const hrs = today.getHours();
const container = document.querySelector("#container");
const title = document.querySelector("#container > h1");
const newImg = document.createElement("img");
newImg.src = (hrs < 12) ? "../img/home.jpg" : "../img/paris.jpg"

idx = 0;
title.addEventListener("click", function(){
    if(idx % 2 == 0){
        container.appendChild(newImg);
    }
    else  {
        container.removeChild(newImg);
    }
    idx++;
})


