import React from 'react';
import fluoride from '../../assets/images/fluoride.png'
import cavity from '../../assets/images/cavity.png'
import whitening from '../../assets/images/whitening.png'
import Service from './Service';

const Services = () => {
    const serviceInfo = [
        {
            _id: 1,
            img: fluoride,
            serviceTitle: 'Fluoride Treatment'
        },
        {
            _id: 2,
            img: cavity,
            serviceTitle: 'Cavity Filling'
        },
        {
            _id: 3,
            img: whitening,
            serviceTitle: 'Teeth Whitening'
        }
    ]
    return (
        <div>
            <div className='my-16 text-center'>
                <h3 className='font-bold text-primary text-2xl uppercase'>Our Services</h3>
                <h2 className=' text-4xl'>Services We Provide</h2>
            </div>
            <div className=' grid lg:grid-cols-3 gap-5 xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 grid-cols-1'>
                {
                    serviceInfo.map(service => <Service
                        key={service._id}
                        service={service}
                    ></Service>)
                }
            </div>

        </div>
    );
};

export default Services;