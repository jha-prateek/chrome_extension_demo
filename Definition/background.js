console.log('background running');

// chrome.runtime.onMessage.addListener(receiver);

// window.word = 'no text selected';

// function receiver(request, sender, sendResponse) {
//   console.log(request);
//   word = request.text;
// }

chrome.commands.onCommand.addListener(function(command) {
    console.log('onCommand event received for message: ', command);
  });