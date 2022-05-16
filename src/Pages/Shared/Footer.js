import React from 'react';
import bg from '../../assets/images/footer.png'
const Footer = () => {
    const year = new Date().getDay()
    return (
        <footer
            style={{
                background: `url(${bg})`,
                backgroundSize: 'cover'
            }}
            className=" p-10"
        >
            <div className='footer  flex justify-around'>
                <div>
                    <span class="footer-title uppercase">Services</span>
                    <a class="link link-hover">Emergency Checkup</a>
                    <a class="link link-hover">Monthly Checkup</a>
                    <a class="link link-hover">Weekly Checkup</a>
                    <a class="link link-hover">Deep Checkup</a>
                </div>
                <div>
                    <span class="footer-title uppercase">Oral Health</span>
                    <a class="link link-hover">Fluoride Treatment</a>
                    <a class="link link-hover">Cavity Filling</a>
                    <a class="link link-hover">Teath Whitening</a>
                </div>
                <div>
                    <span class="footer-title">OUR ADDRESS</span>
                    <a class="link link-hover">New York - 101010 Hudson</a>

                </div>

            </div>
            <div className='my-12 text-center'>
                <p>Copyright © {year} - All right reserved</p>
            </div>
        </footer>
    );
};

export default Footer;