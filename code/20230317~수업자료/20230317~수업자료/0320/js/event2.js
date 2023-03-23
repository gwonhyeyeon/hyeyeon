
const button = document.querySelector("#bttn");

button.addEventListener("click", function(){
    const word = document.querySelector("#word").value;
    const result = document.querySelector("#result");
    let count = word.length;

    result.innerHTML = `${count}`;
});