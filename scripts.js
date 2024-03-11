function sendMessage() {
    var userInput = document.getElementById("user-input").value;
    if (userInput.trim() === "") return;

    appendMessage("You: " + userInput);

    // AJAX request to send message to Python backend
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "/send_message", true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var response = JSON.parse(xhr.responseText);
            appendMessage("Bot: " + response.message);
        }
    };
    xhr.send(JSON.stringify({ message: userInput }));
}

function appendMessage(message) {
    var chatBox = document.getElementById("chat-box");
    chatBox.innerHTML += "<p>" + message + "</p>";
    chatBox.scrollTop = chatBox.scrollHeight;
}
