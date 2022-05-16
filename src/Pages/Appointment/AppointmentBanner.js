import React from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import chair from '../../assets/images/chair.png'
const AppointmentBanner = ({date, setDate}) => {
    return (
        <div class="hero ">
            <div class="hero-content flex-col lg:flex-row-reverse items-center ">
               
                    <img src={chair} class="max-w-sm rounded-lg shadow-2xl" alt='doctors portal' />
              
                <div className='shadow-lg'>
                    <DayPicker
                        mode='single'
                        selected={date}
                        onSelect={setDate}

                    ></DayPicker>
                </div>
            </div>
        </div>
    );
};

export default AppointmentBanner;