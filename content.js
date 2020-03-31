alert("extension running");

chrome.runtime.onMessage.addListener(receiver);

function receiver(message, sender, sendResponse) {
    console.log(message);
    alert(message);
}