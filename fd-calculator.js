function calculateFD() {

    const principal = parseFloat(document.getElementById("principal").value);
    const rate = parseFloat(document.getElementById("rate").value);
    const years = parseFloat(document.getElementById("years").value);

    if (isNaN(principal) || isNaN(rate) || isNaN(years) ||
        principal <= 0 || rate <= 0 || years <= 0) {

        alert("Please enter valid values.");
        return;
    }

    // Annual compound interest
    const maturity = principal * Math.pow((1 + rate / 100), years);

    const interest = maturity - principal;

    document.getElementById("investedAmount").innerHTML =
        "Deposit Amount : ₹ " + principal.toFixed(2);

    document.getElementById("interestEarned").innerHTML =
        "Interest Earned : ₹ " + interest.toFixed(2);

    document.getElementById("maturityAmount").innerHTML =
        "Maturity Amount : ₹ " + maturity.toFixed(2);

}