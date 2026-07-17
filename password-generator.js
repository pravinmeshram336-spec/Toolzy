function generatePassword(){

const chars="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+";

const length=parseInt(document.getElementById("length").value);

let password="";

for(let i=0;i<length;i++){

password+=chars.charAt(Math.floor(Math.random()*chars.length));

}

document.getElementById("password").value=password;

}

function copyPassword(){

const pass=document.getElementById("password");

pass.select();

document.execCommand("copy");

alert("Password Copied!");

}