const root = document.getElementById("root");
const typingArea = document.getElementById("typing-area");
const textArea = document.getElementById("text-area");
let writtenText = "";

let textCorrectlyWritten = "";

let textToWrite = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. " +
        "Aut, voluptates beatae cumque est molestias dignissimos possimus" + 
        "sed magni eaque! Veritatis harum beatae necessitatibus unde deleniti"+
        "repellat quis totam, quibusdam atque!"

function startTyping() {

}

function setText() {
    textArea.innerHTML += textToWrite;
}

document.onload = setText();


document.addEventListener("keydown", (event) => {
    if (/^[\w\.\,\?\!\:\;\-\¿\¡\']$/.exec(event.key)) {
        writtenText += event.key;
    } else if (event.key == " ") {
        writtenText += " ";
    } else if (event.key == "Backspace") {

        if(textCorrectlyWritten.length > 0 && writtenText[writtenText.length - 1] == textCorrectlyWritten[textCorrectlyWritten.length -1]){
            textToWrite = textCorrectlyWritten[textCorrectlyWritten.length - 1] + textToWrite;
            textCorrectlyWritten = textCorrectlyWritten.substring(0, textCorrectlyWritten.length - 1);
        }
        writtenText = writtenText.substring(0, writtenText.length - 1);
    }

    if(writtenText[writtenText.length - 1] == textToWrite[0]){
        textCorrectlyWritten += textToWrite[0];
        textToWrite = textToWrite.substring(1);
    }

    textArea.innerHTML = `<span id="typing-area">${writtenText}</span></span><div id="cursor"></div>` + textToWrite;
});