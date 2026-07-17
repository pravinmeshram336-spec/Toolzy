const lorem="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";

function generateLorem(){

    let count=parseInt(document.getElementById("count").value);

    if(isNaN(count)||count<1){

        count=1;

    }

    let text="";

    for(let i=0;i<count;i++){

        text+=lorem+"\n\n";

    }

    document.getElementById("output").value=text;

}