function decodeURL(){

const input=document.getElementById("inputText").value;

if(input===""){

alert("Enter encoded URL");

return;

}

try{

document.getElementById("outputText").value=decodeURIComponent(input);

}

catch{

alert("Invalid URL!");

}

}

function clearText(){

document.getElementById("inputText").value="";
document.getElementById("outputText").value="";

}

function copyText(){

const output=document.getElementById("outputText");

output.select();

document.execCommand("copy");

alert("Copied!");

}