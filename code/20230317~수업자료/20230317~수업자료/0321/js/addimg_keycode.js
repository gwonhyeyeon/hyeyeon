const container = document.querySelector("#container");
const newImg = document.createElement("img");
newImg.src = "../img/home.jpg"
newImg.classList.add("reset");
const body = document.body;



idx = 0;
body.addEventListener("click", function(){
    if(idx % 2 == 0){
        container.appendChild(newImg);
    }
    else  {
        container.removeChild(newImg);
    }
    idx++;
})

idx = 0;
body.addEventListener("keydown", function(e){
    if(e.key == 't' || e.key =='T'){
        container.removeChild(newImg);
    }
    idx++;
})


