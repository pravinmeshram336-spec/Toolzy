function convertToPNG(){

const file=document.getElementById("imageInput").files[0];

if(!file){
alert("Please select a JPG image.");
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

ctx.drawImage(img,0,0);

const png=canvas.toDataURL("image/png");

document.getElementById("preview").src=png;
document.getElementById("preview").style.display="block";

const download=document.getElementById("downloadBtn");

download.href=png;
download.style.display="inline-block";

};

img.src=e.target.result;

};

reader.readAsDataURL(file);

}