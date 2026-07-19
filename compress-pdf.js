async function compressPDF(){

const file=document.getElementById("pdfInput").files[0];

if(!file){

alert("Please select a PDF.");

return;

}

const { PDFDocument }=PDFLib;

const bytes=await file.arrayBuffer();

const pdf=await PDFDocument.load(bytes);

const compressed=await pdf.save({

useObjectStreams:true,

addDefaultPage:false

});

const blob=new Blob([compressed],{

type:"application/pdf"

});

const url=URL.createObjectURL(blob);

const download=document.getElementById("download");

download.href=url;

download.download="Compressed-Nexamona.pdf";

download.style.display="inline-block";

alert("Compression completed!");

}