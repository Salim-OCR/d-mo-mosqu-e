import { useRef } from "react";
import emailjs from "@emailjs/browser";

const FormContact = () => {
  const service = import.meta.env.VITE_REACT_APP_SERVICE;
  const template = import.meta.env.VITE_REACT_APP_TEMPLATE;
  const id = import.meta.env.VITE_REACT_APP_ID;

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    const formMess = document.querySelector(".formMessage");

    emailjs.sendForm(service, template, form.current, id).then(
      (res) => {
        console.log(res.text);
        form.current.reset();
        formMess.innerHTML = "<p className='success'>Message envoyé !</p>";

        setTimeout(() => {
          formMess.innerHTML = "";
        }, 2000);
      },
      (err) => {
        console.log(err.text);
        formMess.innerHTML =
          "<p className='error'>Une erreur s'est produite, veuillez réessayer</p>";

        setTimeout(() => {
          formMess.innerHTML = "";
        }, 2000);
      }
    );
  };

  return (
    <div className="form-container">
      <h2>contactez-nous </h2>
      <form ref={form} onSubmit={sendEmail} className="form-content">
        <label>nom</label>
        <input type="text" name="name" required autoComplete="off" id="name" />
        <label>Email</label>
        <input
          type="email"
          name="email"
          required
          autoComplete="off"
          id="email"
        />
        <label>Message</label>
        <textarea name="message" id="mess" />
        <input type="submit" value="Envoyer" className="hover button" />
      </form>
      <div className="formMessage"></div>
    </div>
  );
};

export default FormContact;
