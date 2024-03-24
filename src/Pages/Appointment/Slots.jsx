import React from 'react';
import { useState } from 'react';
import { format } from 'date-fns';



const Slots = ({ slots, service, date }) => {

    const formattedDate = format(date, 'MMMM dd, yyyy');

    const [slot, setSlot] = useState(null);


    const handleModal = (slot) => {
        setSlot(slot)
        document.getElementById('my_modal_1').showModal();
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        document.getElementById('my_modal_1').close();

        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const date = form.date.value;
        const slot = form.slot.value;
        const service = service.name;

        const appointment = { name, email, phone, date, slot, service };

        // Send the appointment data to the server
    }

    return (
        <div className='grid grid-cols-2 md:grid-cols-5 gap-8'>
            {
                slots.map((slot, index) => (
                    <button
                        key={index}
                        className='btn btn-primary text-white p-4 rounded-lg'
                        onClick={() => handleModal(slot)}
                    >
                        {slot}
                    </button>


                ))

            }
            <dialog id="my_modal_1" className="modal ">
                <div className="modal-box flex flex-col gap-4">
                    <h3 className="font-bold text-3xl text-center">{service?.name}</h3>
                    <form className='flex flex-col gap-4'>
                        {/* if there is a button in form, it will close the modal */}

                        <div className='flex flex-col'>
                            <label htmlFor="date" className="font-semibold">Date</label>
                            <input name="date" type="text" defaultValue={formattedDate} className="input bg-white text-black font-semibold disabled:bg-gray-400 disabled:text-black" disabled />
                        </div>
                        <div className='flex flex-col'>
                            <label htmlFor="slot" className="font-semibold">Slot</label>
                            <input name="slot" type="text" defaultValue={slot} className="input bg-white text-black font-semibold disabled:bg-gray-400 disabled:text-black" disabled />
                        </div>

                        <div className='flex flex-col'>
                            <label htmlFor="name" className="font-semibold">Name</label>
                            <input name="name" type="text" placeholder="Enter your name" className="input bg-white text-black font-semibold" required />
                        </div>
                        <div className='flex flex-col'>
                            <label htmlFor="email" className="font-semibold">Email</label>
                            <input name="name" type="email" placeholder="Enter your email" className="input bg-white text-black font-semibold" required />
                        </div>
                        <div className='flex flex-col'>
                            <label name="phone" htmlFor="phone" className="font-semibold">Phone</label>
                            <input type="phone" placeholder="Phone Number" className="input bg-white text-black font-semibold" required />
                        </div>

                        <button type='submit' className="btn btn-primary" onClick={handleSubmit}>Submit</button>
                    </form>
                    <button className="btn btn-primary" onClick={() => document.getElementById('my_modal_1').close()}>Close</button>
                </div >
            </dialog >

        </div >
    );
};

export default Slots;