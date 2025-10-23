import React from 'react';
import { ChevronRight } from 'lucide-react';

const Growth = () => {
    return (
        <div>
            <div className='flex text-black justify-center'>
                <ChevronRight className='h-8' />
                <h2 className='text-5xl leading-8 font-semibold '>56%</h2>

            </div>
            <p className='mt-2 text-black'>faster audience growth</p>

            <div className='mt-4 flex justify-center'>
                <div className="avatar-group -space-x-6">
                    <div className="avatar">
                        <div className="w-12">
                            <img src="https://img.daisyui.com/images/profile/demo/batperson@192.webp" />
                        </div>
                    </div>
                    <div className="avatar">
                        <div className="w-12">
                            <img src="https://img.daisyui.com/images/profile/demo/spiderperson@192.webp" />
                        </div>
                    </div>
                    <div className="avatar">
                        <div className="w-12">
                            <img src="https://img.daisyui.com/images/profile/demo/averagebulk@192.webp" />
                        </div>
                    </div>
                    <div className="avatar">
                        <div className="w-12">
                            <img src="https://img.daisyui.com/images/profile/demo/wonderperson@192.webp" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Growth;