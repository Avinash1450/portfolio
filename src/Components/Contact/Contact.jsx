import './Contact.scss'
import { useRef, useState, useEffect } from 'react'
import emailjs from '@emailjs/browser'


const initialValues = {
    user_name : "",
    user_mail : "",
    user_message : ""
}

const Contact = ()=>{

   
   
    const [values, setValues] = useState(initialValues)

    const handleChange = (e)=>{
    
        const {name, value} = e.target 
        setValues(
           { ...values,
            [name] : value,
           })
    }

    const form = useRef()

    const submitEmail  = (e)=>{
        e.preventDefault()
        emailjs.sendForm('service_urx74si','template_byat9ww',form.current,'user_EAf4nunQ2vgMYftvYaMaA')
        .then((result)=>(
            setValues(initialValues)
        ),
        (error)=>(
            console.log(error)
        ))
    }


    return(
        <div className="contact" id="contact">
            <div className="contact-wrapper">
                <div className="contact-left">
                    <span>Wanna get in touch?</span>
                    <span>Send me an email</span>
                    <div className="contact-image">
                        <img src="assets/email.jpg" alt="mail-image" className="email-image" />
                    </div>
                </div>
                <div className="contact-right">
                    <form ref={form} onSubmit={ submitEmail }>
                    <div className="input-wrapper">
                    <label htmlFor="user_name">Name</label>
                    <input type="text" name="user_name" value={values.user_name} onChange={handleChange} className="contact-input" />
                    </div>
                    <div className="input-wrapper">
                    <label htmlFor="user_message">Message</label>
                    <input type="text" name="user_message" value={values.user_message} onChange={handleChange} className="contact-input" />
                    </div>
                    <div className="input-wrapper">
                    <label htmlFor="user_email">Email</label>
                    <input type="text" name="user_mail" value={values.user_mail} onChange={handleChange} className="contact-input" />
                    </div>
                    <div className="input-wrapper">
                    <input type="submit" name="submit" value="submit" className="contact-btn" />
                    </div>
                    </form>
                </div>
            </div>
        </div>
    )
}


export default Contact