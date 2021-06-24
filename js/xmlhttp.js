// handle button clicks

function loadPageContent () {
    document.getElementById('page_content').innerHTML = this.responseText;
};


function loadPAGE(eventOrPage){

    let page= eventOrPage.target.id;
    if (eventOrPage.target.localName == 'button') {
    let xhr = new XMLHttpRequest();
    xhr.onload = loadPageContent;
    xhr.open('GET', `/files/${page}.html`);
    xhr.send();
    };
};


document.addEventListener('DOMContentLoaded', function() {

    loadPage({target: { id: 'page1', 'localName': 'button'}});

    document.getElementById('action_buttons').addEventListener('click', buttonClick);

    //document.getElementById('page1').addEventListener('click', buttonClick);

    //document.getElementById('page2').addEventListener('click', buttonClick);

    //document.getElementById('page3').addEventListener('click', buttonClick);
});
// when the button is clicked, load content into #page_content from the associated /file/ resource

