import { useState } from "react";
import ReactLoading from "react-loading";
import Reveal from "../Reveal";
import FormInput from "./FormInput";
import emailjs from "@emailjs/browser";
import styles from "./Contact.module.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setIsLoading(true);

    await emailjs
      .sendForm(
        "gmail",
        "portfolio_template",
        e.currentTarget,
        "8ILBxGWG_Hys6l0YW"
      )
      .then(
        () => {
          toast("Message submitted succesfully!");
          clearForm();
        },
        (error) => {
          console.log(error.text);
        }
      )
      .finally(() => {
        setIsLoading(false);
      });
  };

  const clearForm = () => {
    setName("");
    setEmail("");
    setSubject("");
    setMessage("");
  };

  // TODO:
  // Proper email validation.
  // Prevent spam.

  return (
    <section className={styles.contact} id="contact">
      <Reveal>
        <div className={styles.contact1}>
          <h1 className="section--header">Contact</h1>
          <p className={styles.description}>
            Feel free to contact me if you have any questions or want to get in
            touch.
          </p>
          <form onSubmit={handleSubmit}>
            <FormInput
              name={"name"}
              value={name}
              length={60}
              placeholder={"Name"}
              handleChange={setName}
            />
            <FormInput
              name={"email"}
              type="email"
              value={email}
              length={50}
              placeholder={"Email"}
              handleChange={setEmail}
            />
            <FormInput
              name={"subject"}
              value={subject}
              length={60}
              placeholder={"Subject"}
              handleChange={setSubject}
            />
            <FormInput
              name={"message"}
              value={message}
              length={1000}
              placeholder={"Message"}
              isTextArea={true}
              handleChange={setMessage}
            />

            {isLoading ? (
              <div className={styles.loading}>
                <ReactLoading type="spin" color="#fff" height={30} width={30} />
              </div>
            ) : (
              <button
                type="submit"
                className={styles.submitButton}
                style={{ marginBottom: "16px" }}
              >
                Submit
              </button>
            )}
          </form>
        </div>
      </Reveal>

      <ToastContainer theme="dark" style={{ marginTop: "50px" }} />
    </section>
  );
};

export default Contact;
