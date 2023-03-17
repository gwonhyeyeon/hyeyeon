function redchange(){
    var pArray = document.getElementsByTagName("p");

    for( var i = 0; i< pArray.length; i++){
        var red = pArray[0];
        red.style.color = "red"
    }
}