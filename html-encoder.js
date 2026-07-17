function encodeHTML() {

    const input = document.getElementById("inputText").value;

    const div = document.createElement("div");

    div.textContent = input;

    document.getElementById("outputText").value = div.innerHTML;

}