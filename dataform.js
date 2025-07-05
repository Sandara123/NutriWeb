const scriptURL = 'https://script.google.com/macros/s/AKfycbziSY5Y0S8zfbVYuLJfKINSl_iPjo-arPnlBkdwZTV3lrD_7indueaMl-6qS2IH5UFD/exec'
  const form = document.forms['contactform']

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => console.log('Success!', response))
      .catch(error => console.error('Error!', error.message))
      document.contactform.reset();

  })