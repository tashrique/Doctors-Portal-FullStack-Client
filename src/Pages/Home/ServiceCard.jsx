import React from 'react';

const ServiceCard = ({ service }) => {

    const { img, title, description } = service;


    return (
        <div className='shadow-3xl rounded-3xl p-12 bg-[#ffffff] flex flex-col justify-center items-center'>
            <img src={img} alt="" />
            <h1 className='text-2xl font-bold py-4 text-[#051a45]'>{title}</h1>
            <p className='text-gray-500'>{description}</p>
        </div>
    );
};

export default ServiceCard;