import React from 'react';
import chair from '../../assets/images/chair.png';
import { DayPicker } from 'react-day-picker';
import { format } from 'date-fns';
import { useState } from 'react';
import AvailableAppointments from './AvailableAppointments';
import Slots from './Slots';


const Appointment = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [selectedService, setSelectedService] = useState(null);


    const handleServiceSelect = (service) => {
        setSelectedService(service);
    }



    return (
        <div className='flex flex-col gap-24 my-40'>

            {/* Calender Part */}
            <section>
                <h1 className='text-4xl text-center font-bold'>Book an Appointment</h1>
                <p className='text-center text-lg my-6'>We are always ready to help you out</p>

                <div className='grid grid-cols-2 my-16 gap-12 items-center'>

                    <div className='flex justify-center items-center flex-col'>
                        <DayPicker
                            mode='single'
                            selected={selectedDate}
                            onSelect={setSelectedDate}
                            className='rounded-3xl border-2 p-12'
                        />

                    </div>

                    <img src={chair} className='shadow-2xl rounded-3xl w-2/3' />

                </div>
            </section>


            {/* Available Services Section */}

            {
                selectedDate && (
                    <section className='text-center'>
                        <h2 className='text-4xl text-center font-bold'>Available Services on {format(selectedDate, 'MMMM dd, yyyy')}</h2>
                        <p className='text-center text-lg my-6'>Please select a service.</p>
                        <AvailableAppointments
                            selectedDate={selectedDate}
                            handleServiceSelect={handleServiceSelect}
                        ></AvailableAppointments>
                    </section>
                )
            }


            {/* Available Slots for Service */}
            {
                selectedService && (
                    <section>
                        <h2 className='text-4xl text-center font-bold'>Available Slots for {selectedService.name}</h2>
                        <p className='text-center text-lg my-3'>Please select a slot.</p>
                        <Slots
                            slots={selectedService.slots}
                            service={selectedService}
                            date={selectedDate}
                        ></Slots>
                    </section>
                )
            }



        </div>
    );
};

export default Appointment;