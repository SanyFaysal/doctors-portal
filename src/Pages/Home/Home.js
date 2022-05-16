import React from 'react';
import Footer from '../Shared/Footer';
import Banner from './Banner';
import ContactForm from './ContactForm';
import Info from './Info';
import MakeAppointment from './MakeAppointment';
import Services from './Services';
import Testimonial from './Testimonial';

const Home = () => {
    return (
        <div className='px-12 mx-auto'>
            <Banner></Banner>
            <Info></Info>
            <Services></Services>
            <MakeAppointment></MakeAppointment>
            <Testimonial></Testimonial>
            <ContactForm></ContactForm>
            <Footer></Footer>
        </div>
    );
};

export default Home;