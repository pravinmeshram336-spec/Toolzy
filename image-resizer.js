function resizeImage(){

const file = document.getElementById("imageInput").files[0];

if(!file){
alert("Please select an image.");
return;
}

const width = parseInt(document.getElementById("width").value);
const height = parseInt(document.getElementById("height").value);

if(!width || !height){
alert("Please enter width and height.");
return;
}

const reader = new FileReader();

reader.onload = function(e){

const img = new Image();

img.onload = function(){

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.width = width;
canvas.height = height;

ctx.drawImage(img,0,0,width,height);

const dataURL = canvas.toDataURL("image/png");

const preview = document.getElementById("preview");
preview.src = dataURL;
preview.style.display = "block";

const downloadBtn = document.getElementById("downloadBtn");
downloadBtn.href = dataURL;
downloadBtn.style.display = "inline-block";

};

img.src = e.target.result;

};

reader.readAsDataURL(file);

}