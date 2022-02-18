import React, { useContext, useRef, useState } from 'react'
import emailjs from '@emailjs/browser';

import "./contact.css"
import Phone from "../../img/phone.png"
import Email from "../../img/email.png"
import Adress from "../../img/adress.png"
import { ThemeContext } from '../../context';

const Contact = () => {

    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;

    const [done, setDone] = useState(false)
    const formRef = useRef()  

    /**
     * preventDefault stop refreshing page on click
     * send email by emailjs service with mail,template,user IDs
     * set state Done true
     * after button add message if done=true
     * @param {*} e 
     */
    const handleSubmit = e => {
      e.preventDefault()
      emailjs.sendForm(
        'service_b16sg8a',
        'template_mks27k7',
        formRef.current,
        'user_mn8SQHUtM1s5AmjNv8Ite'
      )
      .then((result) => {
          console.log(result.text);
          setDone(true)
      }, (error) => {
          console.log(error.text);
      });
    }
  return (
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
          <div className="c-left">
            <h1 className="c-title">Let's discuss your project</h1>
            <div className="c-info">
              <div className="c-item">
                <img src={Phone} alt="" className="c-item-icon" />
                +7 666 666 66 66
              </div>
            </div>

            <div className="c-info">
              <div className="c-item">
                <img src={Email} alt="" className="c-item-icon" />
                iamantongit@gmail.com
              </div>
            </div>

            <div className="c-info">
              <div className="c-item">
                <img src={Adress} alt="" className="c-item-icon" />
                Wonder Land 666 Magic street 66/6
              </div>
            </div>
          </div>

          <div className="c-right">
            <p className="c-desc">
              <b>Lorem, ipsum dolor.</b> Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil beatae cumque repellendus assumenda nemo aspernatur, quaerat et!
            </p>

            <form className="c-form" ref={formRef} onSubmit={handleSubmit}>
              <input 
              style={{ backgroundColor: darkMode && "#333", borderColor: darkMode && "#09e44b" }}
              type="text" placeholder="Name" name="user_name" id="" />

              <input
              style={{ backgroundColor: darkMode && "#333", borderColor: darkMode && "#09e44b" }} 
              type="text" placeholder="Subject" name="user_subject" id="" />

              <input
              style={{ backgroundColor: darkMode && "#333", borderColor: darkMode && "#09e44b" }} 
              type="email" placeholder="Email" name="user_email" id="" />

              <textarea
              style={{ backgroundColor: darkMode && "#333", borderColor: darkMode && "#09e44b" }} 
              placeholder="Message" name="user_message" id=""  rows="5"></textarea>
              
              <button>Submit</button>

              <div className="doneMessage">
                {done && "Message sended! Thank you!"}
              </div>
            </form>
          </div>
          </div>
          
      
    </div>
  )
}

export default Contact
