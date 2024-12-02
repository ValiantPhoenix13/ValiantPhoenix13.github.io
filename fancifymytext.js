const pressed = document.querySelector("button");
const fancy = document.querySelector("#fancy");
const boring = document.querySelector("#boring");

function bigger(){
    document.getElementById("textIn").style.fontSize = "4em";
    
}
function fancify(){
    document.getElementById("textIn").style.fontWeight = "bold";
    document.getElementById("textIn").style.color = "blue";
    document.getElementById("textIn").style.textDecoration = "underline";
}
function borify(){
    document.getElementById("textIn").style.fontWeight = "normal";
}
function moo(){
    document.getElementById("textIn").style.textTransform = "uppercase";
    var userInput = document.getElementById("textIn").value;
    var sentences = userInput.split(".");
    var suffix = sentences.join("-Moo.");
    document.getElementById("textIn").value = suffix;
}


//pressed.addEventListener("click", bigger);
//fancy.addEventListener("onchange", fancify);
//boring.addEventListener("onchange", borify);