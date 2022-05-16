import React from 'react';
import doctor from '../../assets/images/doctor.png'
import appointment from '../../assets/images/appointment.png'
import SharedButton from '../Shared/SharedButton';
const MakeAppointment = () => {
    return (
        <section style={{
            background:`url(${appointment})`
        }} className='flex justify-center items-center my-32'>
            <div className='flex-1 hidden lg:block xl:block'>
                <img className='mt-[-120px]' src={doctor} alt="" />
            </div>
            <div className='flex-1 p-12'>
                <h3 className='text-3xl text-primary font-bold'>Appointment</h3>
                <h2 className='text-white'>Make an Appointment today</h2>
                <p className='text-white py-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos mollitia temporibus amet alias quia saepe? Earum quis unde numquam molestiae repellendus dolorum illo. Itaque blanditiis corporis laborum perspiciatis vero provident corrupti nostrum assumenda vitae voluptate perferendis, rerum cupiditate voluptatem illum?</p>
                <SharedButton>Get Started</SharedButton>
            </div>
        </section>
    );
};

export default MakeAppointment;