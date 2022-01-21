function submitEmail(){
    const imput = document.getElementById('email').value;
    const re = /^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i;
    const valid = re.test(imput);
    const elem = document.querySelector(".email__error-icon");
    const text = document.querySelector(".email__error-text");

    console.log(imput);


    if (!valid){
        elem.classList.add("invalid");
        text.classList.add('error');
    } else{
        elem.classList.remove("invalid");
        text.classList.remove('error');
        alert('Email sent!)')
    }
}