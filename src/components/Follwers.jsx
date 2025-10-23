import React from 'react';
import graphbar from '../assets/graphbar.png'

const Follwers = () => {
    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2'>
                <div className='p-8'>
                    <img src={graphbar} alt="graphbar" className='w-full rounded-2xl shadow-2xl'/>
                </div>

                <div className='flex flex-col items-center justify-center p-3'>
                     <h2 className='text-4xl font-semibold  leading-6 text-white'>Grow Follwers  <span className='font-light text-yellow-200'> <i>with non-step</i></span> content</h2>
                </div>

            </div>
        </div>
    );
};

export default Follwers;