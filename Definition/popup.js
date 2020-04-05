var bgpage = chrome.extension.getBackgroundPage();
var word = bgpage.word.trim();

document.addEventListener('DOMContentLoaded', function showWordDef() {
    if (word.length > 0) {
        // console.log(word);

        let apiKey = '';
        let url = `https://owlbot.info/api/v4/dictionary/${word}`.toLowerCase();
        
        fetch(url, {
            method: 'GET',
            headers: {
                "Authorization": apiKey
            }
        })
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            // console.log(data);
            document.getElementById("definitionArea").innerText = data.definitions[0].definition;
            document.getElementById("owlUrl").setAttribute('href', `https://owlbot.info/?q=${word}`);
            document.getElementById("owlUrl").setAttribute('target', `https://owlbot.info/?q=${word}`);
        })
        .catch((error) => {
            document.getElementById("definitionArea").innerText = 'No definition found (Choose another word or refresh site)';
            document.getElementById("owlUrl").setAttribute('href', `https://owlbot.info/`);
            document.getElementById("owlUrl").setAttribute('target', `https://owlbot.info/`);
        });
    }
});