function calculateEMI() {

    const loan = parseFloat(document.getElementById("loan").value);
    const rate = parseFloat(document.getElementById("rate").value);
    const years = parseFloat(document.getElementById("years").value);

    if (isNaN(loan) || isNaN(rate) || isNaN(years) || loan <= 0 || rate <= 0 || years <= 0) {

        alert("Please enter valid values.");
        return;

    }

    const monthlyRate = rate / 12 / 100;
    const months = years * 12;

    const emi =
        (loan * monthlyRate * Math.pow(1 + monthlyRate, months)) /
        (Math.pow(1 + monthlyRate, months) - 1);

    const totalPayment = emi * months;
    const totalInterest = totalPayment - loan;

    document.getElementById("monthlyEMI").innerHTML =
        "Monthly EMI : ₹ " + emi.toFixed(2);

    document.getElementById("totalInterest").innerHTML =
        "Total Interest : ₹ " + totalInterest.toFixed(2);

    document.getElementById("totalPayment").innerHTML =
        "Total Payment : ₹ " + totalPayment.toFixed(2);

}