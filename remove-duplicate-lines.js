function removeDuplicates(){

const text = document.getElementById("text").value;

const lines = text.split("\n");

const unique = [...new Set(lines)];

document.getElementById("output").value = unique.join("\n");

}