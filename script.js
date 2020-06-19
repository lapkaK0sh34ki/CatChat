
var messages = document.querySelector("#messages");
var textbox = document.querySelector("#textbox");
var button = document.querySelector("#button");

button.addEventListener("click", function(){
    var newMessages = document.createElement("li");
    newMessages.innerHTML = textbox.value;
    messages.appendChild(newMessages);
    textbox.value = "";
});

