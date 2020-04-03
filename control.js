document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("buttonClick").addEventListener("click", replace);
});
  

function replace(){
    
    let txt = document.getElementById("replacer").value;

    let params = {
        active: true,
        currentWindow: true
      };
      chrome.tabs.query(params, function gotTabs(tabs){
        let msg = {
            text : txt
        };

        console.log(tabs);

        chrome.tabs.sendMessage(tabs[0].id, msg);

      });

}