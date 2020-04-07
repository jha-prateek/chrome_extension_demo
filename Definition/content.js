
// console.log("definition extension running");

// Detach existing content.js
var orphanMessageId = chrome.runtime.id + 'orphanCheck';
window.dispatchEvent(new Event(orphanMessageId));
window.addEventListener(orphanMessageId, unregisterOrphan);

// Attac new event listener for highlighted text
window.addEventListener('mouseup', getSelectedText);

function unregisterOrphan(){
    if (chrome.i18n) {
        // console.log('Already existing');
        return false;
    }
    // console.log('Detaching');
    window.removeEventListener(orphanMessageId, unregisterOrphan);
    window.removeEventListener('mouseup', getSelectedText);
    return true;
}

function getSelectedText() {
    let selectedText = window.getSelection().toString().trim();
    // console.log(selectedText);
    if (selectedText.length > 0) {
        let message = {
        text: selectedText
        };
        chrome.runtime.sendMessage(message);
    }
}