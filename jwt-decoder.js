function decodeJWT(){

    const token=document.getElementById("jwtInput").value.trim();

    if(token===""){

        alert("Enter JWT Token");
        return;

    }

    try{

        const payload=token.split(".")[1];

        const decoded=JSON.parse(atob(payload));

        document.getElementById("jwtOutput").value=
        JSON.stringify(decoded,null,4);

    }

    catch{

        document.getElementById("jwtOutput").value=
        "Invalid JWT Token";

    }

}