import React, { useEffect } from 'react';
import { useState } from 'react';
import ApptOptions from './ApptOptions';

const AvailableAppointments = ({ selectedDate, handleServiceSelect }) => {

    const [apptOptions, setApptOptions] = useState([]);

    useEffect(() => {
        // Fetch available appointments from the server
        fetch('fakeAppointmentData.json')
            .then(response => response.json())
            .then(data => {
                setApptOptions(data);
            });
    }, [selectedDate]);

    return (
        <div className='grid grid-cols-1 md:grid-cols-3 gap-12 mb-12'>
            {
                apptOptions.map(appt => (
                    <ApptOptions
                        key={appt.id}
                        appt={appt}
                        handleServiceSelect={handleServiceSelect}
                    ></ApptOptions>
                ))
            }
        </div>
    );
};

export default AvailableAppointments;