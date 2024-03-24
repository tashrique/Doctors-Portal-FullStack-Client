import React from 'react';
import doctor from '../../assets/images/doctor-small.png'
import appointment from '../../assets/images/appointment.png'


const AppointmentHome = () => {
    return (
        <div className="my-52 bg-[#051a45] rounded-3xl" style={{
            backgroundImage: `url(${appointment})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
        }}
        >
            <div className='grid grid-cols-2 justify-center items-center'>
                <div>
                    <img src={doctor} className='-mt-32' border="0" />
                </div>
                <div className='w-5/6 flex flex-col gap-3'>
                    <h1 className='text-4xl font-bold'>Book an Appointment</h1>
                    <p className='py-6'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page</p>
                    <div>
                        <button className='btn btn-primary'>Book Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppointmentHome;