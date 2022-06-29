import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'

function Contact() {
  const form = useRef()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleChange = event => {
    event.target.name === 'from_name'
      ? setName(event.target.value)
      : event.target.name === 'email'
      ? setEmail(event.target.value)
      : event.target.name === 'message'
      ? setMessage(event.target.value)
      : console.log('error')
  }

  const sendEmail = e => {
    e.preventDefault()

    emailjs
      .sendForm('service_Portfolio', 'template_AgohigeTech', form.current, '17Djd38_eKplM91qC')
      .then(
        result => {
          console.log(result.text)
          result.text === 'OK'
            ? alert("Thank you for your message, I'll get back with you in 1-2 business days.")
            : alert("My apologies, something went wrong and your message didn't send.")
          setName('')
          setEmail('')
          setMessage('')
        },
        error => {
          console.log(error.text)
        }
      )
  }
  return (
    <div className="contact mx-3">
      <div className="container">
        <div className="text-center mt-5">
          <h1 className="font-weight-light">Contact</h1>
          <p className="mt-3">
            Reach out however you'd prefer. Can utilize my contact form or reach out via social
            media.
            <br />
            Either way, I look forward to connecting and speaking with you soon!
          </p>
        </div>
        <div className="row justify-content-center mt-3">
          <div className="col-lg-7">
            <form ref={form} onSubmit={sendEmail} className="d-flex flex-column">
              <label className="name">Name:</label>
              <input
                id="name"
                className="nameInput"
                type="text"
                name="from_name"
                onChange={e => handleChange(e)}
                value={name}
              />
              <label className="email">Email:</label>
              <input
                className="emailInput"
                type="email"
                name="email"
                onChange={e => handleChange(e)}
                value={email}
              />
              <label className="message">Message:</label>
              <textarea
                className="messageInput"
                name="message"
                onChange={e => handleChange(e)}
                value={message}
              />
              <button className="submit" type="submit">
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
