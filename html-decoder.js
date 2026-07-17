function decodeHTML() {

    const input = document.getElementById("inputText").value;

    const textarea = document.createElement("textarea");

    textarea.innerHTML = input;

    document.getElementById("outputText").value = textarea.value;

}