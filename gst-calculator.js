const amount = document.getElementById("amount");
const gstRate = document.getElementById("gstRate");

const addGST = document.getElementById("addGST");
const removeGST = document.getElementById("removeGST");
const resetBtn = document.getElementById("resetBtn");

const gstAmount = document.getElementById("gstAmount");
const finalAmount = document.getElementById("finalAmount");

// Add GST

addGST.addEventListener("click", function () {

    const amt = parseFloat(amount.value);
    const rate = parseFloat(gstRate.value);

    if (isNaN(amt) || amt <= 0) {

        alert("Please enter a valid amount.");
        return;

    }

    const gst = (amt * rate) / 100;
    const total = amt + gst;

    gstAmount.innerHTML = "GST Amount : ₹" + gst.toFixed(2);
    finalAmount.innerHTML = "Final Amount : ₹" + total.toFixed(2);

});

// Remove GST

removeGST.addEventListener("click", function () {

    const total = parseFloat(amount.value);
    const rate = parseFloat(gstRate.value);

    if (isNaN(total) || total <= 0) {

        alert("Please enter a valid amount.");
        return;

    }

    const original = total / (1 + rate / 100);
    const gst = total - original;

    gstAmount.innerHTML = "GST Amount : ₹" + gst.toFixed(2);
    finalAmount.innerHTML = "Original Amount : ₹" + original.toFixed(2);

});

// Reset

resetBtn.addEventListener("click", function () {

    amount.value = "";
    gstRate.value = "18";

    gstAmount.innerHTML = "GST Amount : --";
    finalAmount.innerHTML = "Final Amount : --";

});