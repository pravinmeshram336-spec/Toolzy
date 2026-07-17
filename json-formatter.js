function formatJSON(){

const input=document.getElementById("jsonInput").value;

try{

const obj=JSON.parse(input);

document.getElementById("jsonOutput").value=
JSON.stringify(obj,null,4);

}

catch{

alert("Invalid JSON");

}

}

function clearJSON(){

document.getElementById("jsonInput").value="";

document.getElementById("jsonOutput").value="";

}

function copyJSON(){

const output=document.getElementById("jsonOutput");

output.select();

document.execCommand("copy");

alert("Copied!");

}