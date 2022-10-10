const scriptURL = 'https://script.google.com/macros/s/AKfycbzW6r-Y0XR1xQjwpLDIL7UjuoDsM6A1V4BqPI48I_i-0OajLbfRM6F0FfY1a8qQV3o/exec'
const form = document.forms['submit-to-google-sheet']

form.addEventListener('submit', e => {
e.preventDefault()
fetch(scriptURL, { method: 'POST', body: new FormData(form)})
.then(response => {window.alert('We will touch with you shortly !', response)
      form.reset();
})
.catch(error => console.error('Error!', error.message))
});


