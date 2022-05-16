import React from 'react';

const Review = ({ review }) => {
    return (
        <div class="card  bg-base-100 shadow-xl ">
            <div class="card-body">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, repellendus? Eveniet optio quae perferendis quas ratione magni. Doloribus quia unde odio, perspiciatis esse nobis quas fugit ipsa quaerat, nisi est quos, consequatur mollitia veniam odit earum debitis? Accusamus, rem eum!</p>
            </div>
            <div class="flex items-center pl-8 mb-[-30px]">
                <div class="avatar">
                    <div class="w-16 h-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 mr-5">
                        <img src={review.img} alt='' />
                    </div>
                    <div>
                        <h4 className='text-xl'>{review.name}</h4>
                        <p>{review.location}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;