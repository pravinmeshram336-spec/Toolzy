function convertWeight(){

const value = parseFloat(document.getElementById("weightValue").value);
const unit = document.getElementById("weightUnit").value;

if(isNaN(value)){
alert("Please enter a valid weight.");
return;
}

let r1="", r2="";

if(unit==="kg"){
r1=(value*1000).toFixed(2)+" g";
r2=(value*2.20462).toFixed(2)+" lb";
}

if(unit==="g"){
r1=(value/1000).toFixed(3)+" kg";
r2=(value/453.592).toFixed(3)+" lb";
}

if(unit==="lb"){
r1=(value/2.20462).toFixed(3)+" kg";
r2=((value/2.20462)*1000).toFixed(2)+" g";
}

document.getElementById("weightResult1").innerHTML=r1;
document.getElementById("weightResult2").innerHTML=r2;

}