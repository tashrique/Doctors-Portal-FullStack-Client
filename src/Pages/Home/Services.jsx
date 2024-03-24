import React from 'react';
import img1 from '../../assets/images/fluoride.png'
import img2 from '../../assets/images/cavity.png'
import img3 from '../../assets/images/whitening.png'
import ServiceCard from './ServiceCard';

const Services = () => {

    const services = [
        {
            id: 1,
            img: img1,
            title: 'Fluoride Treatment',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.'
        },
        {
            id: 2,
            img: img2,
            title: 'Cavity Filling',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.'
        },
        {
            id: 3,
            img: img3,
            title: 'Teeth Whitening',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.'
        }
    ]


    return (
        <div className='my-32'>
            <h2 className='text-xl font-semibold text-[#051a45]'>OUR SERVICES</h2>
            <h1 className='text-6xl font-bold mb-12'>Services We Provide</h1>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-12 justify-center items-center'>
                {
                    services.map(service => <ServiceCard key={service.id} service={service}></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;