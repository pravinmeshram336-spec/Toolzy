const height = document.getElementById("height");
const weight = document.getElementById("weight");

const calculateBtn = document.getElementById("calculateBtn");
const resetBtn = document.getElementById("resetBtn");

const bmiResult = document.getElementById("bmiResult");
const bmiStatus = document.getElementById("bmiStatus");

calculateBtn.addEventListener("click", function () {

    const h = parseFloat(height.value);
    const w = parseFloat(weight.value);

    if (isNaN(h) || isNaN(w) || h <= 0 || w <= 0) {

        alert("Please enter valid Height and Weight.");
        return;

    }

    const bmi = (w / ((h / 100) * (h / 100))).toFixed(1);

    bmiResult.innerHTML = bmi;

    if (bmi < 18.5) {

        bmiStatus.innerHTML = "🔵 Underweight";

    }

    else if (bmi < 25) {

        bmiStatus.innerHTML = "🟢 Normal Weight";

    }

    else if (bmi < 30) {

        bmiStatus.innerHTML = "🟠 Overweight";

    }

    else {

        bmiStatus.innerHTML = "🔴 Obese";

    }

});

resetBtn.addEventListener("click", function () {

    height.value = "";
    weight.value = "";

    bmiResult.innerHTML = "--";
    bmiStatus.innerHTML = "--";

});