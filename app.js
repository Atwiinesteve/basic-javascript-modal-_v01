const openBtn = document.querySelector('.open--modal');
const closeBtn = document.querySelector('.close--modal');
const overlay = document.querySelector('.modal--overlay');

openBtn.addEventListener('click', function() {
  overlay.style.display = 'block';
})

closeBtn.addEventListener('click', function() {
  overlay.style.display = 'none';
})

window.addEventListener('click', function(e) {
  if(e.target === overlay) {
    overlay.style.display = 'none';
  }
})