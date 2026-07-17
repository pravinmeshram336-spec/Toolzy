let qrCode;

function generateQR(){

const text=document.getElementById("qrText").value.trim();

if(text===""){

alert("Please enter text or URL.");

return;

}

const qrContainer=document.getElementById("qrcode");

qrContainer.innerHTML="";

qrCode=new QRCode(qrContainer,{

text:text,

width:250,

height:250

});

}

function clearQR(){

document.getElementById("qrText").value="";

document.getElementById("qrcode").innerHTML="";

}