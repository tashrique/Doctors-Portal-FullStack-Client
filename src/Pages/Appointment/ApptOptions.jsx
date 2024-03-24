import React from 'react';

const ApptOptions = ({ appt, handleServiceSelect }) => {

    const { name, slots } = appt;

    return (
        <div className='p-8 bg-white rounded-xl text-primary'>
            <h3 className='text-2xl font-bold text-[#051a45]'>{name}</h3>
            <p>Available slots: {slots.length}</p>
            <button onClick={() => handleServiceSelect(appt)} className='btn btn-primary border-0 text-white px-4 py-2 rounded-lg mt-4'>Show Available Options</button>
        </div>
    );
};

export default ApptOptions;