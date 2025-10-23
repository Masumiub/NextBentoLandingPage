import React from 'react';
import { Instagram } from 'lucide-react';
import { Facebook } from 'lucide-react';
const MultipleAccounts = () => {
    return (
        <div className=''>
            <div className=' flex gap-2 text-black'>
                <button className='btn shadow-2xl bg-white rounded-full text-black'> <Instagram className='w-3'/> @masum</button>
                 <button className='btn shadow-2xl bg-white rounded-full text-black'><Facebook className='w-3'/> @masum</button>

            </div>
            <h2 className='text-2xl leading-6 font-semibold mt-2 text-black'>Manage <span className='font-light'> <i>multiple</i></span> accounts and platforms</h2>
        </div>
    );
};

export default MultipleAccounts;