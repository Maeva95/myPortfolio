import React from 'react'
import { useState } from 'react'
import emailjs from '@emailjs/browser'
import './style.css'

const Form = () => {

    const [currentValue, setCurrentValue] = useState({
        from_name: '',
        message: '',
        reply_to: '',
        });
  // fonction de saisie de texte
    
    const changeValue = (event) => {
        setCurrentValue({...currentValue, [event.target.name]: event.target.value})
    };

    const onSubmit = (e) => {
        e.preventDefault();
        alert('Merci pour votre message, je reviendrai vers vous très prochainement')
        emailjs
        .send(
            'service_4shsdu9',
            'template_kiwnnhx',
            currentValue,
            'ff_8V3qRPhQi48hyY',
        )
        .then((response) => {
            console.log('SUCCESS!', response.status, response.text);
        })
        .catch((err) => {
            console.log('FAILED...', err);
        });
    }

    return (
        <form className='contact-form' onSubmit={onSubmit}>
            <div className='identity'>
                <label htmlFor="from_name"></label>
                <input type="text" id='from_name' name='from_name' value={currentValue.from_name} placeholder='Votre nom' onChange={changeValue} required/>
                <label htmlFor="mail"></label>
                <input type="email" id='mail' name='reply_to' placeholder='Votre email' value={currentValue.reply_to} onChange={changeValue} required/>
                <textarea className='message' rows='7' name='message' placeholder='Votre message' value={currentValue.message} onChange={changeValue}/>
            </div>
            <input type="submit" value="Envoyer" className='btn btn-contact'/>
        </form>
    )
}

export default Form