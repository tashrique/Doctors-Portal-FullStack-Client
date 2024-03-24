import React from 'react';
import banner from '../../assets/images/chair.png'
import bgg from '../../assets/images/bg.png'

const Banner = () => {
    return (
        <div className="bg-[url(bgg)] py-32 my-12" style={{
            backgroundImage: `url(${bgg})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            borderRadius: '50px'
        }}>
            <div className="hero-content flex-col lg:grid lg:grid-cols-2 gap-8 mx-auto">
                <div className='text-left'>
                    <h1 className="text-5xl font-bold w-2/3">Your New Smile Starts Here!</h1>
                    <p className="py-8 w-4/5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button className="btn btn-primary px-10">Get Started</button>
                </div>
                <div className='flex justify-end items-end'>
                    <img src={banner} className="rounded-xl shadow-2xl" />

                </div>
            </div>
        </div >
    );
};

export default Banner;