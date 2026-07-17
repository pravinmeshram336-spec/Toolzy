function convertLength(){

const value = parseFloat(document.getElementById("lengthValue").value);
const unit = document.getElementById("lengthUnit").value;

if(isNaN(value)){
alert("Please enter a value.");
return;
}

let r1="", r2="";

if(unit==="m"){
r1=(value/1000).toFixed(4)+" km";
r2=(value*100).toFixed(2)+" cm";
}

if(unit==="km"){
r1=(value*1000).toFixed(2)+" m";
r2=(value*100000).toFixed(2)+" cm";
}

if(unit==="cm"){
r1=(value/100).toFixed(2)+" m";
r2=(value/100000).toFixed(4)+" km";
}

document.getElementById("lengthResult1").innerHTML=r1;
document.getElementById("lengthResult2").innerHTML=r2;

}