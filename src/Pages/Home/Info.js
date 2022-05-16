import React from 'react';
import InfoCard from './InfoCard';
import clock from '../../assets/icons/clock.svg'
import marker from '../../assets/icons/marker.svg'
import phone from '../../assets/icons/phone.svg'
const Info = () => {
    const cartInfo = [
        { id: 1, img: clock, cartTitle: 'Opening Hours', cartDesc: 'Lorem Ipsum is simply dummy text of the pri', bgClass: 'bg-gradient-to-r from-secondary to-primary' },
        { id: 2, img: marker, cartTitle: 'Visit our location', cartDesc: 'Brooklyn, NY 10036, United States', bgClass: 'bg-accent' },
        { id: 3, img: phone, cartTitle: 'Brooklyn, NY 10036, United States', cartDesc: '+000 123 456789', bgClass: 'bg-gradient-to-r from-secondary to-primary' },
    ]
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 gap-5'>

            {
                cartInfo.map(cart => <InfoCard
                    key={cart.id}
                    cart={cart}
                ></InfoCard>)
            }
        </div>
    );
};

export default Info;