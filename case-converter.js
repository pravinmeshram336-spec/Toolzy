function toUpperCaseText(){
document.getElementById("text").value =
document.getElementById("text").value.toUpperCase();
}

function toLowerCaseText(){
document.getElementById("text").value =
document.getElementById("text").value.toLowerCase();
}

function toTitleCase(){
let text = document.getElementById("text").value.toLowerCase();
text = text.replace(/\b\w/g, function(char){
return char.toUpperCase();
});
document.getElementById("text").value = text;
}

function toSentenceCase(){
let text = document.getElementById("text").value.toLowerCase();
if(text.length>0){
text = text.charAt(0).toUpperCase()+text.slice(1);
}
document.getElementById("text").value = text;
}

function copyText(){
const text = document.getElementById("text");
text.select();
document.execCommand("copy");
alert("Copied!");
}

function clearText(){
document.getElementById("text").value="";
}