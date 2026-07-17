function repeatText(){

const text=document.getElementById("text").value;

const count=parseInt(document.getElementById("count").value);

let result="";

for(let i=0;i<count;i++){

result+=text+"\n";

}

document.getElementById("output").value=result;

}