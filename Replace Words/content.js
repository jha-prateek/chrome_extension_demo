console.log("extension running");

chrome.runtime.onMessage.addListener(receiver);

function receiver(message, sender, sendResponse) {
    let h2_list = document.getElementsByTagName("h2");
    for (h2 of h2_list) {
        h2.innerHTML = message.text;
    }
    let h3_list = document.getElementsByTagName("h3");
    for (h3 of h3_list) {
        h3.innerHTML = message.text;
    }
    alert(`h1 and h2 will be replaced by ${message.text}.`);
}