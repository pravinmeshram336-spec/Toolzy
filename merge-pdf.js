async function mergePDF() {

const files = document.getElementById("pdfInput").files;

if (files.length < 2) {
    alert("Please select at least 2 PDF files.");
    return;
}

const { PDFDocument } = PDFLib;

const mergedPdf = await PDFDocument.create();

for (let i = 0; i < files.length; i++) {

    const fileBytes = await files[i].arrayBuffer();

    const pdf = await PDFDocument.load(fileBytes);

    const copiedPages = await mergedPdf.copyPages(
        pdf,
        pdf.getPageIndices()
    );

    copiedPages.forEach((page) => {
        mergedPdf.addPage(page);
    });

}

const mergedPdfFile = await mergedPdf.save();

const blob = new Blob(
    [mergedPdfFile],
    { type: "application/pdf" }
);

const url = URL.createObjectURL(blob);

const download = document.getElementById("download");

download.href = url;

download.download = "Merged-Toolzy.pdf";

download.style.display = "inline-block";

alert("PDF merged successfully!");

}