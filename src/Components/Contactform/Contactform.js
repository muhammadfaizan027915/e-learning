import React from 'react';
import Contactformbackground from '../../Assets/Images/Contactformbackground.jpg'
import "./Contactform.css"

const Contactform = () => {
    return (
        <div className='contactform'>
            <div className='contact-left'>
                <img src={Contactformbackground} alt="contact form image" />
            </div>

            <div className='contact-right'>
                <h1>Get in Touch</h1>
                <p>Have some suggestions or just want to say hi? Our support team are reaedy help you 24/7</p>

                <form action="">
                    <div className='form-fields'>
                        <input type="text" name="name" id="name" placeholder='Name' />

                        <input type="text" name="email" id="email" placeholder='Email' />

                        <input type="tel" name="phone" id="phone" placeholder='Phone Number' />

                        <input type="url" name="website" id="website" placeholder='Your Website' />
                    </div>

                    <textarea name="message" id="message" cols="30" rows="10" placeholder='Your message here'></textarea>

                    <input type="button" value="SUBMIT" className='cta-btn'/>
                </form>
            </div>
        </div>
    );
}

export default Contactform;

