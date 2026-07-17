function convertToJPG(){

const file=document.getElementById("imageInput").files[0];

if(!file){
alert("Please select a PNG image.");
return;
}

const reader=new FileReader();

reader.onload=function(e){

const img=new Image();

img.onload=function(){

const canvas=document.getElementById("canvas");

const ctx=canvas.getContext("2d");

canvas.width=img.width;
canvas.height=img.height;

// White background for transparent PNG
ctx.fillStyle="#ffffff";
ctx.fillRect(0,0,canvas.width,canvas.height);

ctx.drawImage(img,0,0);

const jpg=canvas.toDataURL("image/jpeg",0.95);

document.getElementById("preview").src=jpg;
document.getElementById("preview").style.display="block";

const download=document.getElementById("downloadBtn");

download.href=jpg;
download.style.display="inline-block";

};

img.src=e.target.result;

};

reader.readAsDataURL(file);

}