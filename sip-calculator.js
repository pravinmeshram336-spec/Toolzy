function calculateSIP() {

    const monthly = parseFloat(document.getElementById("monthlyInvestment").value);
    const annualRate = parseFloat(document.getElementById("annualRate").value);
    const years = parseFloat(document.getElementById("years").value);

    if (isNaN(monthly) || isNaN(annualRate) || isNaN(years) ||
        monthly <= 0 || annualRate <= 0 || years <= 0) {

        alert("Please enter valid values.");
        return;

    }

    const monthlyRate = annualRate / 12 / 100;
    const months = years * 12;

    const maturity =
        monthly *
        (((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) *
        (1 + monthlyRate));

    const invested = monthly * months;
    const returns = maturity - invested;

    document.getElementById("totalInvestment").innerHTML =
        "Total Investment : ₹ " + invested.toFixed(2);

    document.getElementById("estimatedReturns").innerHTML =
        "Estimated Returns : ₹ " + returns.toFixed(2);

    document.getElementById("maturityValue").innerHTML =
        "Maturity Value : ₹ " + maturity.toFixed(2);

}