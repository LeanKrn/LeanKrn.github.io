import React, { useRef } from "react";
import "../Styles/EmailJS.css";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

const validateEmail = (email) => {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
};
const signInMessage = {
  en: "Email sent successfully",
  es: "Envío de correo electrónico exitoso",
  pt: "E-mail enviado com sucesso",
};

const errorMessages = {
  en: "Invalid email address",
  es: "Correo electrónico inválido",
  pt: "Endereço de e-mail inválido",
};
const incompleteFieldsMessage = {
  en: "Incomplete fields",
  es: "Campos incompletos",
  pt: "Campos incompletos",
};

const name = {
  en: "name",
  es: "nombre",
  pt: "nombre",
};
const message = {
  en: "Message",
  es: "Mensaje",
  pt: "Messagem",
};
const input = {
  en: "Send",
  es: "Enviar",
  pt: "Enviar",
};

const Toast = Swal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener("mouseenter", Swal.stopTimer);
    toast.addEventListener("mouseleave", Swal.resumeTimer);
  },
});

export const ContactUs = ({ Lenguage }) => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    const nameInput = form.current.querySelector('input[name="user_name"]');
    const emailInput = form.current.querySelector('input[name="user_email"]');
    const messageInput = form.current.querySelector('textarea[name="message"]');

    const nameValue = nameInput.value.trim();
    const emailValue = emailInput.value.trim();
    const messageValue = messageInput.value.trim();

    if (nameValue === "" || emailValue === "" || messageValue === "") {
      console.log("Campos vacíos");
      return Toast.fire({
        icon: "Error",
        title: incompleteFieldsMessage[Lenguage],
      });
    }

    if (!validateEmail(emailValue)) {
      console.log("Correo electrónico inválido");
      return Toast.fire({
        icon: "Error",
        title: errorMessages[Lenguage],
      });
    }
    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_KEY,
        process.env.REACT_APP_TEMPLATE_KEY,
        form.current,
        process.env.REACT_APP_PUBLIC_KEY
      )
      .then(
        () => {
          Toast.fire({
            icon: "success",
            title: signInMessage[Lenguage],
          });
        },
        () => {
          Toast.fire({
            icon: "Error",
            title: errorMessages[Lenguage],
          });
        }
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <div className="FormDiv">
        <label>{name[Lenguage]}</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>{message[Lenguage]}</label>
        <textarea name="message" />
      </div>
      <input type="submit" value={input[Lenguage]} />
    </form>
  );
};
