async function splitPDF(){

const file=document.getElementById("pdfInput").files[0];

const pageNumber=parseInt(document.getElementById("pageNumber").value);

if(!file){

alert("Please select PDF");

return;

}

const { PDFDocument }=PDFLib;

const bytes=await file.arrayBuffer();

const pdf=await PDFDocument.load(bytes);

const totalPages=pdf.getPageCount();

if(pageNumber<1 || pageNumber>totalPages){

alert("Invalid page number");

return;

}

const newPdf=await PDFDocument.create();

const [page]=await newPdf.copyPages(pdf,[pageNumber-1]);

newPdf.addPage(page);

const pdfBytes=await newPdf.save();

const blob=new Blob([pdfBytes],{type:"application/pdf"});

const url=URL.createObjectURL(blob);

const download=document.getElementById("download");

download.href=url;

download.download="Split-Page-"+pageNumber+".pdf";

download.style.display="inline-block";

alert("Page extracted successfully!");

}