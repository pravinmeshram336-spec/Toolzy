const dob = document.getElementById("dob");
const calculateBtn = document.getElementById("calculateBtn");
const resetBtn = document.getElementById("resetBtn");

const years = document.getElementById("years");
const months = document.getElementById("months");
const days = document.getElementById("days");

calculateBtn.addEventListener("click", function () {

    if (dob.value === "") {
        alert("Please select your Date of Birth");
        return;
    }

    const birthDate = new Date(dob.value);
    const today = new Date();

    let ageYears = today.getFullYear() - birthDate.getFullYear();
    let ageMonths = today.getMonth() - birthDate.getMonth();
    let ageDays = today.getDate() - birthDate.getDate();

    if (ageDays < 0) {
        ageMonths--;
        const lastMonth = new Date(today.getFullYear(), today.getMonth(), 0);
        ageDays += lastMonth.getDate();
    }

    if (ageMonths < 0) {
        ageYears--;
        ageMonths += 12;
    }

    years.innerHTML = "Years : " + ageYears;
    months.innerHTML = "Months : " + ageMonths;
    days.innerHTML = "Days : " + ageDays;

});

resetBtn.addEventListener("click", function () {

    dob.value = "";

    years.innerHTML = "Years : --";
    months.innerHTML = "Months : --";
    days.innerHTML = "Days : --";

});