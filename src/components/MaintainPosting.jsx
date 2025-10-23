import React from 'react';
import calendar from '../assets/calendar.png'
const MaintainPosting = () => {
    return (
        <div className='flex flex-col justify-center items-center pr-7 pl-7 overflow-y-hidden'>
            <div className=''>
                <h2 className='text-2xl font-semibold  leading-6 text-black'>Maintain a <span className='font-light text-indigo-600'> <i>consistent</i></span> posting schedule</h2>
            </div>

            <div className='relative flex justify-center items-center'>
                <img src={calendar} alt="calendar" className='mt-6 w-80 md:w-full rounded-2xl' />
            </div>

        </div>
    );
};

export default MaintainPosting;