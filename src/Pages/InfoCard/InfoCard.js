import React from 'react';

const InfoCard = ({ cart }) => {
    const { img, cartTitle, cartDesc, bgClass } = cart;
    return (
        <div class={`card card-side shadow-xl ${bgClass} text-white `}>
            <figure className='pl-5'>
                <img src={img} alt="Movie" />
            </figure>
            <div class="card-body">
                <h2 class="card-title">{cartTitle}</h2>
                <p>{cartDesc}</p>
            </div>
        </div>
    );
};

export default InfoCard;