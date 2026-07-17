function testRegex(){

    const text=document.getElementById("text").value;

    const pattern=document.getElementById("regex").value;

    try{

        const regex=new RegExp(pattern,"g");

        const matches=text.match(regex);

        if(matches){

            document.getElementById("output").innerHTML=
            "Matches:<br>"+matches.join(", ");

        }else{

            document.getElementById("output").innerHTML=
            "No Match Found";

        }

    }

    catch{

        document.getElementById("output").innerHTML=
        "Invalid Regular Expression";

    }

}