var a = document.getElementById("loading");
function myloader(){
    a.style.display="none";
};
window.onload = function(){
    setTimeout(()=>document.getElementById("popupmain").style.display = "block",3000)
}
function myclose(){
     document.getElementById("popupmain").style.display = "none";
}
let flag=2;
function control(x){
    flag=flag +x;
    slidebar(flag);
}
function slidebar(num) {
    let a = document.getElementsByClassName('sub');
    	if (num == a.length) {
    		flag=0;
    		num=0;
    	}
    	if (num < 0) {
    		flag=a.length-1;
    		num=a.length-1;
    	}
    	for(let y of a){
    		y.style.display="none";
    	}
    	a[num].style.display = "block"
}
slidebar(flag);
function controlAuto(x){
    slidebar(flag);
}
setInterval(() => {
    controlAuto(++flag);
},7000)

//  Newsletter email subscribe
const scriptURL = 'https://script.google.com/macros/s/AKfycbzzOTZc7AkpHK8PbJriKgo9zC1WVbLOneIDaQGRMpcmU28CI2wCA_-1101QTfibFuxH1g/exec'
const form = document.forms['submit-to-google-sheet']

form.addEventListener('submit', e => {
e.preventDefault()
fetch(scriptURL, { method: 'POST', body: new FormData(form)})
.then(response => {window.alert('Thanks for submitting!', response)
   form.reset();
})
.catch(error => console.error('Error!', error.message))
});
