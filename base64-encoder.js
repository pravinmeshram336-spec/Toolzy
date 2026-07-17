function encodeText(){

const input=document.getElementById("inputText").value;

if(input===""){

alert("Enter some text");

return;

}

document.getElementById("outputText").value=btoa(unescape(encodeURIComponent(input)));

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