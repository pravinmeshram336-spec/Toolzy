function calculateLoan() {

    const loan = parseFloat(document.getElementById("loanAmount").value);
    const rate = parseFloat(document.getElementById("interestRate").value);
    const years = parseFloat(document.getElementById("loanYears").value);

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

    document.getElementById("loanEMI").innerHTML =
        "Monthly EMI : ₹ " + emi.toFixed(2);

    document.getElementById("loanInterest").innerHTML =
        "Total Interest : ₹ " + totalInterest.toFixed(2);

    document.getElementById("loanTotal").innerHTML =
        "Total Payment : ₹ " + totalPayment.toFixed(2);

}