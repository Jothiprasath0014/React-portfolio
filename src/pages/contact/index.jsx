import React, { useState } from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import PageHeader from "../../components/pageheader";
import { Animate } from "react-simple-animate";
import "./styles.scss";
import emailjs from "@emailjs/browser";
import { toast} from "react-toastify";
import "react-toastify/ReactToastify.css";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    const customTemplate = {
      from_name: name,
      from_email: email,
      to_name: "JothiPrasath",
      message: message,
    };

    const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
    const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

    emailjs.send(serviceId, templateId, customTemplate, publicKey)
      .then((response) => {
        console.log("Email sent sucessfully!", response);
        setName("");
        setEmail("");
        setMessage("");

        toast.success("Message sent successfully!", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      })
      .catch((error) => {
        console.error("Error sending email:", error);

        toast.error("Failed to send message. Please try again.", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });
  }

  return (
    <section id="contact" className="contact">
      <PageHeader
        headerText="Contact Me"
        icon={<BsInfoCircleFill size={30} />}
      />

      <div className="contact__content">
        <Animate
          play
          duration={1}
          delay={0}
          start={{
            transform: "translateX(-200px)",
          }}
          end={{
            transform: "translateX(0px)",
          }}
        >
          <h3 className="contact__content__header-text">Let's Talk</h3>
        </Animate>

        <Animate
          play
          duration={1}
          delay={0}
          start={{
            transform: "translateX(200px)",
          }}
          end={{
            transform: "translateX(0px)",
          }}
        >
          <form onSubmit={handleSubmit} className="contact__content__form">
            <div className="contact__content__form__form-wrapper">
              <div>
                <input
                  id="name"
                  required
                  type="text"
                  className="inputName"
                  value={name}
                  onChange={(e)=> setName(e.target.value)}
                  // placeholder="Enter your Name"
                />
                <label htmlFor="name" className="nameLabel">
                  Name
                </label>
              </div>

              <div>
                <input required type="text" id="email" className="inputEmail" value={email}
                  onChange={(e)=> setEmail(e.target.value)}/>
                <label htmlFor="email" className="emailLabel">
                  Email
                </label>
              </div>

              <div>
                <textarea
                  rows={5}
                  id="description"
                  required
                  type="text"
                  className="inputDescription"
                  value={message}
                  onChange={(e)=> setMessage(e.target.value)}
                  // placeholder="Content..."
                />
                <label htmlFor="description" className="descriptionLabel">
                  Description
                </label>
              </div>
            </div>
            <button>Submit</button>
          </form>
        </Animate>
      </div>
    </section>
  );
}

export default Contact;
