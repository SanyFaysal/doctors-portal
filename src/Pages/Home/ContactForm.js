import React from 'react';
import appointment from '../../assets/images/appointment.png'
const ContactForm = () => {
    return (
        <div style={{
            background: `url(${appointment})`
        }}
            className="mt-40 flex justify-center">
            <div className=''>
                <div className='text-center my-5'>
                    <h6 className='text-primary font-bold text-xl'>Contact Us</h6>
                    <h5 className='text-2xl text-white '>Stay connected with us</h5>
                </div>
                <form className='my-5'>
                    <input type="text" placeholder="Email Address" class="input w-full max-w-xs" /><br />
                    <input type="text" placeholder="Subject" class="input w-full max-w-xs my-3" /><br />
                    <textarea class="textarea w-full max-w-xs" placeholder="Your Message"></textarea><br />
                    <input type="submit" value="Submit" className='btn btn-primary text-white mx-auto block my-3' />
                </form>
            </div>
        </div>
    );
};

export default ContactForm;