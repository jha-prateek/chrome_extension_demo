var bgpage = chrome.extension.getBackgroundPage();
var word = bgpage.word.trim();

document.addEventListener('DOMContentLoaded', function showWordDef() {
    if (word.length > 0) {
        // console.log(word);

        endpoint = 'entries';
        language_code = 'en-us';

        let url = `https://od-api.oxforddictionaries.com/api/v2/${endpoint}/${language_code}/${word}`.toLowerCase();
        
        fetch(url, {
            method: 'GET',
            headers: {
                "app_id": '', 
                "app_key": ''
            }
        })
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            // console.log(data);
            document.getElementById("definitionArea").innerText = data.results[0].lexicalEntries[0].entries[0].senses[0].definitions[0];
        })
        .catch((error) => {
            document.getElementById("definitionArea").innerText = 'No definition found (Choose another word or refresh site)';
        });
    }
});