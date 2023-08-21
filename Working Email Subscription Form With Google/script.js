const scriptURL = 'https://script.google.com/macros/s/AKfycbyW7DmwM46rE7dbVSSdpO9HCWun1cCVgveLIbkmnSnRzTpde9MWogyqY3KhbfvCOvJU/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
            msg.innerHTML = "Thank You For Subscribing !"
            setTimeout(function(){
                msg.innerHTML = ""
            }, 5000)
            form.reset();
      })
      .catch(error => console.error('Error!', error.message))
})
