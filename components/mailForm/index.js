import { useRouter } from "next/router";
import { useState } from "react";

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
      fetch(`${process.env.BASE_URL}/api/${router.locale}/send-mail`, {
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
    <div className="container-mail-form">
      <div className="container-fluid">
        <div className="row">
          <div className="col p0">
            <form
              className="main"
              onSubmit={(e) => {
                handleSubmit(e);
              }}
            >
              <div className="inputGroup">
                <label htmlFor="name">{t.forms.mail.name}</label>
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
              <div className="inputGroup">
                <label htmlFor="email">{t.forms.mail.email}</label>
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
              <div className="inputGroup">
                <label htmlFor="message">{t.forms.mail.message}</label>
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
              <div className="row mb-10">
                <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 t-10">
                  {submitted === "sending" && (
                    <div className="alert alert-warning fit-content mt-10">
                      {t.forms.mail.sending}
                    </div>
                  )}
                  {submitted === "sent" && (
                    <div className="alert alert-success fit-content mt-10">
                      {t.forms.mail.sent}
                    </div>
                  )}
                  {submitted === "error" && (
                    <div className="alert alert-danger fit-content mt-10">
                      {t.forms.mail.error}
                    </div>
                  )}
                </div>
                <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 text-right">
                  <input
                    type="submit"
                    className="submit"
                    disabled={submitted !== ""}
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <style jsx>{`
        .container-mail-form {
          margin-bottom: 10px;
        }
        .submit {
          width: 100px;
          float: right;
          border: none;
          padding: 10px 20px;
          margin-top: 10px;
          border-radius: 4px;
          color: white !important;
          background-color: #54a7e4;
          );
        }
        .submit:hover {
          cursor: pointer;
        }
        .errorMessage {
          margin-top: 10px;
          margin-bottom: 20px;
        }
        .submit:disabled,
        .submit[disabled] {
          color: silver;
          opacity: 0.9;
          cursor: not-allowed;
        }
        @media screen and (max-width: 768px) {
          .submit {
            width: 100%;
            margin-bottom: 20px;
          }
          .errorMessage {
            padding-top: 60px;
            text-align: center;
          }
          .alert{
            width: 100% !important;
          }
        }
      `}</style>
    </div>
  );
};

export default Footer;
