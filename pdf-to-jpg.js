pdfjsLib.GlobalWorkerOptions.workerSrc =
'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/4.5.136/pdf.worker.min.js';

async function convertPDF() {

const file = document.getElementById("pdfInput").files[0];

if (!file) {
alert("Please select a PDF file.");
return;
}

const preview = document.getElementById("preview");
preview.innerHTML = "";

const arrayBuffer = await file.arrayBuffer();

const pdf = await pdfjsLib.getDocument({ data: arrayBuffer }).promise;

for (let pageNumber = 1; pageNumber <= pdf.numPages; pageNumber++) {

const page = await pdf.getPage(pageNumber);

const viewport = page.getViewport({ scale: 2 });

const canvas = document.createElement("canvas");

const context = canvas.getContext("2d");

canvas.width = viewport.width;
canvas.height = viewport.height;

await page.render({
canvasContext: context,
viewport: viewport
}).promise;

const img = document.createElement("img");

img.src = canvas.toDataURL("image/jpeg", 0.95);

img.style.width = "100%";
img.style.marginTop = "20px";
img.style.borderRadius = "10px";
img.style.border = "2px solid #00ff99";

preview.appendChild(img);

const download = document.createElement("a");

download.href = img.src;
download.download = `page-${pageNumber}.jpg`;

download.innerHTML = "<br><button>Download Page " + pageNumber + "</button>";

preview.appendChild(download);

}

}