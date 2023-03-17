// function change2() {
//     var name = document.getElementById("name")
//     name.classList.toggle("namestyle")
// }



// function change() {
//     var title = document.getElementById("title");
//     title.addEventListener("click", function(){
//         title.classList.toggle("titlestyle")
//     })
// }

// change();

// function backchange() {
//     const usernames = document.getElementsByTagName("p");

//     for( var i=0; i<usernames.length; i++){
//         usernames[i].style.fontSyle = 'italic';
//         usernames[i].style.backgroundColor = 'blue';
//         }

        
//     }

function classchange() {

    const usernames = document.querySelectorAll("#desc p");

    // for( var i = 0; i < usernames.length; i++)

        var name = usernames[0];
        name.classList.toggle("namestyle")

    }

function classchange1(){

    const usernames = document.querySelectorAll("#desc p");
    var address = usernames[1];
    address.classList.toggle("namestyle")


}
function classchange2(){
    const usernames = document.querySelectorAll("#desc p");

    var phone = usernames[2];
    phone.classList.toggle("namestyle")
}



