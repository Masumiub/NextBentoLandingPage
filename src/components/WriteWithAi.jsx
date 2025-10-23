import React from 'react';
import chatbg from '../assets/chat bg.png'


const WriteWithAi = () => {
    return (
        <div className=''>
            <div className='pt-8 pr-8 pl-8'>
<h2 className='text-3xl leading-8 font-semibold text-white'>Write your Content using <span className='font-light'> AI</span></h2>
            </div>
             
            <div>
                <img src={chatbg} alt="chat" className='w-full rounded-2xl shadow-2xl mt-4'/>
            </div>
        </div>
    );
};

export default WriteWithAi;