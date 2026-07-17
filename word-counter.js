function countWords(){

const text = document.getElementById("text").value;

const words = text.trim()===""
?0
:text.trim().split(/\s+/).length;

const characters = text.length;

const noSpace = text.replace(/\s/g,"").length;

document.getElementById("words").innerHTML = words;

document.getElementById("characters").innerHTML = characters;

document.getElementById("nospace").innerHTML = noSpace;

}