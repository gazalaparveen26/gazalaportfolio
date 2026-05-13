/* ========================= */
/* PROJECT FILTERING */
/* ========================= */

const filterButtons = document.querySelectorAll('.filter-btn');
const projects = document.querySelectorAll('.project-item');

filterButtons.forEach(button => {

  button.addEventListener('click', () => {

    const filter = button.getAttribute('data-filter');

    projects.forEach(project => {

      if(filter === 'all'){
        project.style.display = 'block';
      }
      else if(project.classList.contains(filter)){
        project.style.display = 'block';
      }
      else{
        project.style.display = 'none';
      }

    });

  });

});

  AOS.init({
    duration:1000,
    once:true
  });

  const texts = [
    'PHP Developer',
    'Freelancer',
    'Web Application Builder',
    'Returning To Tech'
  ];

  let count = 0;
  let index = 0;
  let currentText = '';
  let letter = '';

  (function type(){
    if(count === texts.length){
      count = 0;
    }

    currentText = texts[count];
    letter = currentText.slice(0, ++index);

    document.getElementById('typing-text').textContent = letter;

    if(letter.length === currentText.length){
      count++;
      index = 0;
    }

    setTimeout(type, 120);
  })();

  const themeToggle = document.getElementById('themeToggle');

  themeToggle.addEventListener('click',()=>{
    document.body.classList.toggle('dark-mode');
  });
if(!valid){
    return;
}

/* CAPTCHA CHECK */

const captchaResponse = grecaptcha.getResponse();

if(captchaResponse.length === 0){

    alert("Please verify captcha");

    return;

}

/* SHOW LOADER */

loader.classList.remove("d-none");
btnText.innerText = "Sending...";