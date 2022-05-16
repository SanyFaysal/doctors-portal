import React from 'react';
import quote from '../../assets/icons/quote.svg'
import people1 from '../../assets/images/people1.png'
import people2 from '../../assets/images/people2.png'
import people3 from '../../assets/images/people3.png'
import Review from './Review';
const Testimonial = () => {
    const reviews = [
        {
            id: 1,
            name: 'Wilson Hurry',
            img: people1,
            location:'Hong kong, Japan'

        },
        {
            id: 2,
            name: 'Jack Swam',
            img: people2,
            location:'Hong kong, Japan'

        },
        {
            id: 3,
            name: 'Philip Peek',
            img: people3,
            location:'Hong kong, Japan'
        },

    ]
    return (
        <section>
            <div className='flex justify-between'>
                <div>
                    <h4 className="text-xl text-primary font-bold text-center">Testimonials</h4>
                    <h2 className="text-3xl text-center">What our patients says</h2>
                </div>
                <div>
                    <img className='xl:w-48 md:w-25 sm:w-5 lg:w-48' src={quote} alt="" />
                </div>
            </div>
            <div className='grid grid-cols-1 xl:grid-cols-3 gap-4'>
                {
                    reviews.map(review => <Review
                        key={review.id}
                        review={review}
                    ></Review>)
                }
            </div>
        </section>
    );
};

export default Testimonial;