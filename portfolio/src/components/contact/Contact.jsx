import React, { useRef } from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";

import emailjs from "@emailjs/browser";

const ContactData = [
  {
    id: 1,
    icon: <MdOutlineEmail />,
    title: "Email",
    info: "mostafamahmod1112000@gmail.com",
    link: "mailto:mostafamahmod1112000@gmail.com",
  },
  {
    id: 2,
    icon: <RiMessengerLine />,
    title: "Messenger",
    info: "Mustafa Elplehy",
    link: "https://m.me/MustafaElplehy",
  },
  {
    id: 3,
    icon: <BsWhatsapp />,
    title: "WhatsApp",
    info: "01102028274",
    link: "https://api.whatsapp.com/send?phone=201102028274",
  },
];

function Contact() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_cf3rv6t",
      "template_rgg66jh",
      form.current,
      "aTfeRpmAcKbr2_6nB"
    );
    e.target.reset();
  };

  return (
    <section className="contact" id="contact">
      <div className="top_section">
        <h5>Get In Touch</h5>
        <h2> Contact Me</h2>
      </div>

      <div className="container  contact_container">
        <div className="contact_options">
          {ContactData.map(({ id, icon, title, info, link }) => (
            <article key={id} className="contact_option">
              {icon}
              <h4>{title}</h4>
              <h5>{info}</h5>
              <a href={link} target="_blank">
                Send Message{" "}
              </a>
            </article>
          ))}
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" placeholder="Full name" name="name" />
          <input type="email" placeholder="Your Email" name="email" />
          <textarea
            rows={10}
            placeholder="Enter Your Message"
            name="message"
            id=""
          ></textarea>
          <button className="btn btn-primary">Send Message </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
