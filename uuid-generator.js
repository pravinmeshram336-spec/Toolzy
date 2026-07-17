function generateUUID(){

const uuid = crypto.randomUUID();

document.getElementById("uuidOutput").value = uuid;

}

function copyUUID(){

const output = document.getElementById("uuidOutput");

if(output.value===""){

alert("Generate a UUID first!");

return;

}

output.select();

document.execCommand("copy");

alert("UUID Copied!");

}