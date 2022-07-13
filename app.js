let questions = window.document.querySelectorAll('.content');



for(let i = 0; i < questions.length; i++) {
  questions[i].addEventListener('click', function() {
    this.classList.toggle('active');
  })
}