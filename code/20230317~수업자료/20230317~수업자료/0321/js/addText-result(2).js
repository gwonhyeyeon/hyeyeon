const orderInfo = document.querySelector("#orderInfo");
const orderButton = document.querySelector("#order");
const title = document.querySelector("#container > h2");

const newP = document.createElement("p");
let textNode = document.createTextNode(title.innerHTML);
newP.appendChild(textNode);
newP.style.fontSize = "0.8em";
newP.style.color = "blue";


idx = 0;

orderButton.addEventListener("click", function () {

    if (idx % 2 == 0) {
        orderInfo.appendChild(newP);
    }

    else {
        orderInfo.removeChild(newP)
    }

    idx++;

});


