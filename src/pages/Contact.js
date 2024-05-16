import Header from "../componant/Header";
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

import './Contact.css'

function EmailForm(){

  const form = useRef();

  function handleClickSent(e){

    e.preventDefault();

    emailjs
    .sendForm('service_f4crely', 'template_crvae7l', form.current, {
      publicKey: 'jGMGVwuKpJiuU_AJ9',
    })
    .then(
      () => {
        console.log('SUCCESS!');
        document.getElementById('uName').value = '';
        document.getElementById('email').value = '';
        document.getElementById('message').value = '';
      },
      (error) => {
        console.log('FAILED...', error.text);
      },
    );
  }

  return(
    <form className="form" ref={form} onSubmit={handleClickSent}>
      <input    id="uName"   required  name="from_name" className="input" type="text"  placeholder="الاسم"/>
      <input    id="email"   required name="email"     className="input" type="email" placeholder="الايميل"/>
      <textarea id="message" required name="message"   className="input"              placeholder="الرسالة"/>
      <button>ارسل</button>
    </form>
  )
}

function GetInTouch(){
  return(
    <div className="touch">
      <p>للتواصل بنقرة :</p>
      <p>الاسم: حسين محمد <a target="_blank" href={`https://wa.me/1280659176`}><i class="fa-brands fa-whatsapp"></i></a></p>
      <p>الاسم: محمد جلال <a target="_blank" href={`https://wa.me/1223795016`}><i class="fa-brands fa-whatsapp"></i></a></p>
    </div>
  )
}

function Contact(){
  return(
    <>
      <Header />
      <div className="contact container">
        <EmailForm />
        <GetInTouch />
      </div>
    </>
  )
}
export default Contact;