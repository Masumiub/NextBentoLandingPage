import React from 'react';
import graph from '../assets/graph.png'


const SocialMedia = () => {
    return (
        <div>
            <div className='pl-7 pr-7 pb-4'>
                <h2 className='text-3xl leading-8 font-semibold text-black'>Schedule to social Media</h2>
            </div>

            <div className='pl-7'>
                <img src={graph} alt="graph" className='w-full rounded-tl-2xl rounded-bl-2xl' />
            </div>

            <div className='pl-7 pr-7 pt-4 text-black'>
                <p className='text-sm'>Optimize post timings to publish content at the perfect time for your audience</p>
            </div>
        </div>
    );
};

export default SocialMedia;