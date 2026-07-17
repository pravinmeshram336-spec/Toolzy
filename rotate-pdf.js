async function rotatePDF(){

const file=document.getElementById("pdfInput").files[0];

const angle=parseInt(document.getElementById("angle").value);

if(!file){

alert("Please select a PDF.");

return;

}

const { PDFDocument,degrees }=PDFLib;

const bytes=await file.arrayBuffer();

const pdf=await PDFDocument.load(bytes);

const pages=pdf.getPages();

pages.forEach(page=>{

page.setRotation(degrees(angle));

});

const pdfBytes=await pdf.save();

const blob=new Blob([pdfBytes],{

type:"application/pdf"

});

const url=URL.createObjectURL(blob);

const download=document.getElementById("download");

download.href=url;

download.download="Rotated-Toolzy.pdf";

download.style.display="inline-block";

alert("PDF rotated successfully!");

}