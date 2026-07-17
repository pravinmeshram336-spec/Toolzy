// ================= SEARCH =================

const searchInput = document.querySelector(".search-box input");
const searchButton = document.querySelector(".search-box button");

const tools = {

  // Calculators
  "clock": "clock.html",
  "digital clock": "clock.html",

  "age": "age-calculator.html",
  "age calculator": "age-calculator.html",

  "bmi": "bmi-calculator.html",
  "bmi calculator": "bmi-calculator.html",

  "gst": "gst-calculator.html",
  "gst calculator": "gst-calculator.html",

  "emi": "emi-calculator.html",
  "emi calculator": "emi-calculator.html",

  "percentage": "percentage-calculator.html",
  "percentage calculator": "percentage-calculator.html",

  "loan": "loan-calculator.html",
  "loan calculator": "loan-calculator.html",

  "sip": "sip-calculator.html",
  "sip calculator": "sip-calculator.html",

  "fd": "fd-calculator.html",
  "fd calculator": "fd-calculator.html",

  // Converters
  "temperature": "temperature-converter.html",
  "temperature converter": "temperature-converter.html",

  "length": "length-converter.html",
  "length converter": "length-converter.html",

  "weight": "weight-converter.html",
  "weight converter": "weight-converter.html",

  // Text Tools
  "word counter": "word-counter.html",
  "character counter": "character-counter.html",
  "case converter": "case-converter.html",
  "remove duplicate lines": "remove-duplicate-lines.html",
  "text repeater": "text-repeater.html",
  "text sorter": "text-sorter.html",

  // Image Tools
  "image resizer": "image-resizer.html",
  "image compressor": "image-compressor.html",
  "jpg to png": "jpg-to-png.html",
  "png to jpg": "png-to-jpg.html",

  // PDF Tools
  "jpg to pdf": "jpg-to-pdf.html",
  "pdf to jpg": "pdf-to-jpg.html",
  "merge pdf": "merge-pdf.html",
  "split pdf": "split-pdf.html",
  "compress pdf": "compress-pdf.html",
  "png to pdf": "png-to-pdf.html",
  "pdf to png": "pdf-to-png.html",
  "rotate pdf": "rotate-pdf.html",

  // Developer Tools
  "json formatter": "json-formatter.html",
  "base64 encoder": "base64-encoder.html",
  "base64 decoder": "base64-decoder.html",
  "url encoder": "url-encoder.html",
  "url decoder": "url-decoder.html",
  "html encoder": "html-encoder.html",
  "html decoder": "html-decoder.html",
  "password generator": "password-generator.html",
  "qr generator": "qr-generator.html",
  "uuid generator": "uuid-generator.html",
  "hash generator": "hash-generator.html",
  "jwt decoder": "jwt-decoder.html",
  "lorem ipsum": "lorem-ipsum.html",
  "regex tester": "regex-tester.html",
  "diff checker": "diff-checker.html"

};

if (searchButton && searchInput) {

    function searchTool() {

        const value = searchInput.value.trim().toLowerCase();

        if (tools[value]) {
            window.location.href = tools[value];
        } else {
            alert("Tool not found!");
        }

    }

    searchButton.addEventListener("click", searchTool);

    searchInput.addEventListener("keydown", function(e){

        if(e.key === "Enter"){
            searchTool();
        }

    });

}

// ================= DIGITAL CLOCK =================

const clock = document.getElementById("clock");

if(clock){

    let is24Hour = false;

    function updateClock(){

        const now = new Date();

        let h = now.getHours();
        let m = String(now.getMinutes()).padStart(2,"0");
        let s = String(now.getSeconds()).padStart(2,"0");

        let ampm = h >= 12 ? "PM" : "AM";

        let displayHour;

        if(is24Hour){
            displayHour = String(h).padStart(2,"0");
        }else{
            displayHour = String((h % 12) || 12).padStart(2,"0");
        }

        clock.innerHTML = is24Hour
            ? `${displayHour}:${m}:${s}`
            : `${displayHour}:${m}:${s} ${ampm}`;

        const date = document.getElementById("date");

        if(date){

            const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
            const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];

            date.innerHTML =
            `${days[now.getDay()]}<br>${now.getDate()} ${months[now.getMonth()]} ${now.getFullYear()}`;

        }

    }

    updateClock();

    setInterval(updateClock,1000);

    const toggleBtn = document.getElementById("toggleFormat");

    if(toggleBtn){

        toggleBtn.addEventListener("click",function(){

            is24Hour = !is24Hour;

            this.innerHTML = is24Hour ? "12 Hour" : "24 Hour";

            updateClock();

        });

    }

}