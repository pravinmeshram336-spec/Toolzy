function checkDiff(){

    const text1=document.getElementById("text1").value.trim();

    const text2=document.getElementById("text2").value.trim();

    if(text1===text2){

        document.getElementById("result").innerHTML=
        "✅ Both Texts are Identical";

    }else{

        document.getElementById("result").innerHTML=
        "❌ Texts are Different";

    }

}