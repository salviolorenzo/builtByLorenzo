const form = document.querySelector('[data-form]');


window.onload = function () {
  form.addEventListener('submit', function (event) {
    event.preventDefault();
    this.contact_number.value = Math.random() * 100000;
    emailjs.sendForm('contact_service', 'contact_template', this);
  });
}

