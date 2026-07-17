function convertTemperature(){

const value = parseFloat(document.getElementById("tempValue").value);
const unit = document.getElementById("tempUnit").value;

if(isNaN(value)){
alert("Please enter a temperature.");
return;
}

let r1="", r2="";

if(unit==="C"){
r1=((value*9/5)+32).toFixed(2)+" °F";
r2=(value+273.15).toFixed(2)+" K";
}

if(unit==="F"){
r1=((value-32)*5/9).toFixed(2)+" °C";
r2=(((value-32)*5/9)+273.15).toFixed(2)+" K";
}

if(unit==="K"){
r1=(value-273.15).toFixed(2)+" °C";
r2=(((value-273.15)*9/5)+32).toFixed(2)+" °F";
}

document.getElementById("result1").innerHTML=r1;
document.getElementById("result2").innerHTML=r2;

}