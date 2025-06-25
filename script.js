document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();
  alert('Thank you for your message!');
  this.reset();
});

document.getElementById('navToggle').addEventListener('click', function () {
  document.getElementById('mainNav').classList.toggle('show');
});

const topBtn = document.getElementById('scrollTop');
window.addEventListener('scroll', function () {
  if (window.pageYOffset > 300) {
    topBtn.classList.add('show');
  } else {
    topBtn.classList.remove('show');
  }
});

topBtn.addEventListener('click', function () {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
