function countCharacters(){

const text = document.getElementById("text").value;

const total = text.length;

const noSpace = text.replace(/\s/g,"").length;

const spaces = total - noSpace;

document.getElementById("total").innerHTML = total;

document.getElementById("nospace").innerHTML = noSpace;

document.getElementById("spaces").innerHTML = spaces;

}