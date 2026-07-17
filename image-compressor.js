const qualitySlider = document.getElementById("quality");

if(qualitySlider){

qualitySlider.oninput = function(){

document.getElementById("qualityValue").innerHTML = this.value;

};

}

function compressImage(){

const file = document.getElementById("imageInput").files[0];

if(!file){

alert("Please select an image.");

return;

}

const quality = document.getElementById("quality").value / 100;

const reader = new FileReader();

reader.onload = function(e){

const img = new Image();

img.onload = function(){

const canvas = document.getElementById("canvas");

const ctx = canvas.getContext("2d");

canvas.width = img.width;

canvas.height = img.height;

ctx.drawImage(img,0,0);

const compressed = canvas.toDataURL("image/jpeg", quality);

document.getElementById("preview").src = compressed;
document.getElementById("preview").style.display = "block";

const download = document.getElementById("downloadBtn");

download.href = compressed;

download.style.display = "inline-block";

};

img.src = e.target.result;

};

reader.readAsDataURL(file);

}