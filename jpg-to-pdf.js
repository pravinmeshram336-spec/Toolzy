const imageInput = document.getElementById("imageInput");

if(imageInput){

imageInput.addEventListener("change",function(){

const container=document.getElementById("images");

container.innerHTML="";

Array.from(this.files).forEach(file=>{

const reader=new FileReader();

reader.onload=function(e){

const img=document.createElement("img");

img.src=e.target.result;

img.style.width="120px";
img.style.margin="10px";
img.style.borderRadius="10px";
img.style.border="2px solid #00ff99";

container.appendChild(img);

};

reader.readAsDataURL(file);

});

});

}

async function convertPDF(){

const files=document.getElementById("imageInput").files;

if(files.length===0){

alert("Please select JPG images.");

return;

}

const { jsPDF }=window.jspdf;

const pdf=new jsPDF();

for(let i=0;i<files.length;i++){

const dataURL=await new Promise(resolve=>{

const reader=new FileReader();

reader.onload=e=>resolve(e.target.result);

reader.readAsDataURL(files[i]);

});

const img=new Image();

await new Promise(resolve=>{

img.onload=resolve;

img.src=dataURL;

});

if(i>0){

pdf.addPage();

}

pdf.addImage(dataURL,"JPEG",10,10,190,270);

}

pdf.save("Toolzy-JPG-to-PDF.pdf");

}