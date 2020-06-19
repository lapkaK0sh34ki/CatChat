
var messages = document.getElementById("messages");
var textbox = document.getElementById("textbox");
var button = document.getElementById("button");

button.addEventListener("click", function(){
    var messages = document.createElement("li");
    newMessages.innerHTML = textbox.value;
    messages.appendChild(newMessage);
    textbox.value = "";
});

