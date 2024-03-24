import React from 'react';
import treatment from '../../assets/images/treatment.png'

const Hero = () => {
    return (
        <div className="hero my-52">
            <div className="hero-content grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-32">
                <img src={treatment} className="rounded-3xl shadow-43xl" />
                <div className='text-left flex flex-col gap-4'>
                    <h1 className="text-5xl font-bold">Exceptional Dental Care, on Your Terms</h1>
                    <p className="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page</p>
                    <div>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;