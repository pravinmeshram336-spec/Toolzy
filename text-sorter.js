function sortAZ(){

const text=document.getElementById("text").value;

const lines=text
.split("\n")
.filter(line=>line.trim()!=="")
.sort();

document.getElementById("output").value=lines.join("\n");

}

function sortZA(){

const text=document.getElementById("text").value;

const lines=text
.split("\n")
.filter(line=>line.trim()!=="")
.sort()
.reverse();

document.getElementById("output").value=lines.join("\n");

}