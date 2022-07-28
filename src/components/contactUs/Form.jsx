import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import 'bootstrap/dist/css/bootstrap.min.css';
import './form.scss'


function Form(){
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_tw4oukr', 'template_xa2yifb', form.current, 'D3fP7M862KGnni-Tv')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div className="contact-us">
    <form ref={form} onSubmit={sendEmail}>
      <h1 className="d-flex justify-content-center">
        Atención al cliente
        </h1>
      <div className="form-group">
        <label>Nombre</label>
        <input type="name" className="form-control" id="user_name" name="name"  required/>
      </div>
      <div className="form-group">
        <label>Apellido</label>
        <input type="last-name" className="form-control input-box" id="user_lastname" name="last-name" required />
      </div>
      <div className="form-group">
        <label>Email</label>
        <input type="email" className="form-control" placeholder="name@example.com" name="email" required/>
      </div>  
      <div className="form-group">
        <label>Mensaje</label>
        <textarea className="form-control" rows="3" name="message" required/>
        <br></br>  
      </div>
      <div className="form-group d-flex justify-content-center" >
        <button  type="button" className="btn btn-danger">  
           <input type="submit" className= "buttonSend d-flex align-self-center" value="Enviar" />
        </button>  
      </div>
    </form>
    </div>
  );
};

export default Form;