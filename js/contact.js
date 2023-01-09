const submitBtn = document.querySelector('#ct_submit');
const emailaddress =  document.querySelector('#ct_email');
const lastname =  document.querySelector('#ct_name');
const phone =  document.querySelector('#ct_phone');
const ct_text =  document.querySelector('#ct_text');




submitBtn.addEventListener('mouseover',() => {
  if(emailaddress.value === '') {
    emailaddress.style.border = "2px solid red";
  }

  if(lastname.value === '') {
    lastname.style.border = "2px solid red";
  }
  if(phone.value === '') {
    phone.style.border = "2px solid red";
  }
  if(ct_text.value === '') {
    ct_text.style.border = "2px solid red";
  }
})


submitBtn.addEventListener('mouseleave',() => {
  if(emailaddress.value === '') {
    emailaddress.style.border = "2px solid transparent";
  }

  if(lastname.value === '') {
    lastname.style.border = "2px solid transparent";
  }
  if(phone.value === '') {
    phone.style.border = "2px solid transparent";
  }
  if(ct_text.value === '') {
    ct_text.style.border = "2px solid transparent";
  }
})
