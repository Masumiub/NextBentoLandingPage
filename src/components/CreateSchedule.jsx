import React from 'react';
import { Sparkles } from 'lucide-react';

const CreateSchedule = () => {
    return (
        <div>
            <h2 className='text-3xl leading-8 font-semibold text-white'>Create and schedule content <span className='font-light'> <i>Quicker</i></span></h2>
        
            <button className='btn rounded-full bg-amber-700 text-white shadow-none border-0 mt-5 hover:bg-purple-600'>Create Post <Sparkles className='w-3'></Sparkles></button>
        </div>
    );
};

export default CreateSchedule;