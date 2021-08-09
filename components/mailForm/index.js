import { useRouter } from "next/router";
import { useState } from "react";
import styles from "../../styles/MailForm.module.css";

import tr from "../../locales/tr";
import en from "../../locales/en";

const Footer = () => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : tr;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState("");

  const validateEmail = (email) => {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateEmail(email) && name && message && submitted === "") {
      setSubmitted("sending");

      fetch("api/send-mail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          message,
        }),
      })
        .then((response) => response.json())
        .then((res) => {
          if (res.status === 200) {
            setSubmitted("sent");
            setName("");
            setEmail("");
            setMessage("");
            setTimeout(() => {
              setSubmitted("");
            }, 3000);
          }
          if (res.status === 500) {
            setSubmitted("error");
            console.log(res);
            setTimeout(() => {
              setSubmitted("");
            }, 3000);
          }
        })
        .catch((e) => {
          console.log(e);
          setTimeout(() => {
            setSubmitted("");
          }, 3000);
        });
    }
  };

  return (
    <div className={styles.container}>
      <div className="container-fluid">
        <div className="row">
          <div className="col p0">
            <div className={styles.container}>
              <form
                className={styles.main}
                onSubmit={(e) => {
                  handleSubmit(e);
                }}
              >
                <div className={styles.inputGroup}>
                  <label for="name">{t.forms.mail.name}</label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="form-control"
                    required={true}
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                  />
                </div>
                <div className={styles.inputGroup}>
                  <label for="email">{t.forms.mail.email}</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="form-control"
                    value={email}
                    pattern="^[^ ]+@[^ ]+\.[a-z]{2,6}$"
                    required={true}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                </div>
                <div className={styles.inputGroup}>
                  <label for="message">{t.forms.mail.message}</label>
                  <textarea
                    rows="4"
                    type="text"
                    name="message"
                    id="message"
                    className="form-control"
                    value={message}
                    required={true}
                    onChange={(e) => {
                      setMessage(e.target.value);
                    }}
                  />
                </div>
                <input
                  type="submit"
                  className={styles.submit}
                  disabled={submitted !== ""}
                />
                <div className={styles.errorMessage}>
                  {submitted === "sending" && <p>{t.forms.mail.sending}</p>}
                  {submitted === "sent" && <p>{t.forms.mail.sent}</p>}
                  {submitted === "error" && <p>{t.forms.mail.error}</p>}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
