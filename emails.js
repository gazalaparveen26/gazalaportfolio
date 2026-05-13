/* ========================= */
/* EMAILJS INIT */
/* ========================= */

emailjs.init({
    publicKey: "qFcEBIwiOMdeyHSkY",
}); // YOUR PUBLIC KEY

/* ========================= */
/* CONTACT FORM */
/* ========================= */

const form = document.getElementById("contactForm");

form.addEventListener("submit", function(e){

    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    const loader = document.getElementById("loader");
    const btnText = document.getElementById("btnText");
    const successMessage = document.getElementById("successMessage");

    /* ERROR ELEMENTS */

    const nameError = document.getElementById("nameError");
    const emailError = document.getElementById("emailError");
    const messageError = document.getElementById("messageError");

    /* RESET ERRORS */

    nameError.innerText = "";
    emailError.innerText = "";
    messageError.innerText = "";

    let valid = true;

    /* NAME VALIDATION */

    if(name === ""){

        nameError.innerText = "Name is required";
        valid = false;

    }

    /* EMAIL VALIDATION */

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
    if(email === ""){

        emailError.innerText = "Email is required";
        valid = false;

    }
    else if(!email.match(emailPattern)){

        emailError.innerText = "Enter valid email";
        valid = false;

    }

    /* MESSAGE VALIDATION */

    if(message === ""){

        messageError.innerText = "Message is required";
        valid = false;

    }

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

    /* SEND EMAIL */

    emailjs.send(

        "service_on8ou2h", // YOUR SERVICE ID
        "template_336hmdg", // YOUR TEMPLATE ID

        {
            name: name,
            email: email,
            message: message
        }

    )

    .then(function(){

        loader.classList.add("d-none");

        btnText.innerText = "Send Message";

        successMessage.classList.remove("d-none");

        form.reset();

    })

    .catch(function(error){

        loader.classList.add("d-none");

        btnText.innerText = "Send Message";

        alert("Failed To Send Message");

        console.log(error);

    });

});