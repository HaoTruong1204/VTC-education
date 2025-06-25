document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();
  alert('Thank you for your message!');
  this.reset();
});

document.getElementById('navToggle').addEventListener('click', function () {
  document.getElementById('mainNav').classList.toggle('show');
});
