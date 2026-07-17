function decodeText(){

const input=document.getElementById("inputText").value;

if(input===""){

alert("Enter Base64 text");

return;

}

try{

document.getElementById("outputText").value=
decodeURIComponent(escape(atob(input)));

}

catch{

alert("Invalid Base64!");

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