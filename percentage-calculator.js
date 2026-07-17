function calculatePercentage() {

    const value = parseFloat(document.getElementById("value").value);
    const total = parseFloat(document.getElementById("total").value);

    if (isNaN(value) || isNaN(total)) {
        document.getElementById("percentageResult").innerHTML =
        "Please enter both numbers.";
        return;
    }

    if (total === 0) {
        document.getElementById("percentageResult").innerHTML =
        "Total cannot be 0.";
        return;
    }

    const percentage = (value / total) * 100;

    document.getElementById("percentageResult").innerHTML =
        percentage.toFixed(2) + "%";
}