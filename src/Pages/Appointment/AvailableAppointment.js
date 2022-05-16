import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import Service from './Service';
import BookingModal from '../Appointment/BookingModal'
const AvailableAppointment = ({ date }) => {
    const [services, setServices] = useState([]);
    const [treatment, setTreatment] = useState(null)
    useEffect(() => {
        fetch('http://localhost:5000/service')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className='my-32'>
            <div className='mb-5'>
                <h4 className='text-secondary text-1xl font-bold text-center'>Available Appointments on  {format(date, 'PP')}</h4>
            </div>
            <div className='grid xl:grid-cols-3 sm:grid-cols-1 gap-5'>
                {services.map(service => <Service
                    key={service._id}
                    service={service}
                    setTreatment={setTreatment}
                ></Service>)}
               
            </div>
            {treatment && <BookingModal
                date={date}
                treatment={treatment}
                setTreatment = {setTreatment}
            ></BookingModal>}
        </div>
    );
};

export default AvailableAppointment;