console.log("backgrounding")

chrome.browserAction.onClicked.addListener(buttonClicked);

function buttonClicked(tab){
    console.log(tab);
    // only works for new tab
    chrome.tabs.sendMessage(tab.id, "back to Front")
}