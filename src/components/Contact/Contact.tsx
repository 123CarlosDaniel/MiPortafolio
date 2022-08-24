import { FormEvent, useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import './Contact.css'

const Contact = () => {
  const form = useRef<HTMLFormElement>(null)
  const [show, setShow] = useState(false)
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    emailjs.sendForm('service_a2owugw', 'template_o3lolpp', form.current as HTMLFormElement, 'ez3QVxlfAB8gURWDh')
      .then(() => {
        form.current?.reset()  
        setShow(true)
      })
      .catch(err => console.log(err.text))
      
      new Promise(res => {
          setTimeout(() => {
            res(setShow(false))
          }, 5000);
      })
    console.log('Formulario enviado')
  }
  return (
    <section id="contact">
      <h2>Contact me by sending a message</h2>
      <div className="form-container">
        <form onSubmit={handleSubmit} ref={form}>
          <div>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" placeholder="Name" required/>
          </div>
          <div>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" placeholder="Email" required/>
          </div>
          <div>
          <label htmlFor="message">Message</label>
          <textarea name="message" id="message"  rows={5} required></textarea>
          <button type='submit' className='button-form'>Send</button>
          </div>
        </form>
        <div className={show ? 'form-message show' :'form-message'}>Message sent successfully</div>
      </div>
    </section>
  )
}

export default Contact