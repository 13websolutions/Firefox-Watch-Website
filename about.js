$(document).ready(function(){
    $(".counter").counterUp({
        delay: 10,
        time: 1000
    });
});

const scriptURL = 'https://script.google.com/macros/s/AKfycbzzOTZc7AkpHK8PbJriKgo9zC1WVbLOneIDaQGRMpcmU28CI2wCA_-1101QTfibFuxH1g/exec'
    const form = document.forms['submit-to-google-sheet']
    let msg=document.getElementById('message')
          
    form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {window.alert('Thnaks for submitting!', response)
    form.reset();
    })
    .catch(error => console.error('Error!', error.message))
    });