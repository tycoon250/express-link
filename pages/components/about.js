import React from 'react';

const About = () => {
    return (
        <div className='w-100 p-40p bp-10p-resp bsbb' id='about'>
            {/* Section Header */}
            <div className='w-100 p-20p bsbb'>
                <span className='py-10p pr-40p bb-4-s-theme capitalize fs-40p'>Who are we?</span>
            </div>

            {/* Description Section */}
            <div className='w-90 bfull-resp h-a m-a px-30p py-40p bp-20p-resp bsbb'>
                <span className='ddgray fs-25p'>
                ExpressLink offers non-emergency medical transport—ambulatory, wheelchair & stretcher.
                We deliver care-focused, respectful, and timely service.
                Everyone deserves dignity and access to care.
                We bridge patients to providers with ease and compassion.
                We are committed to accessible, reliable transport.
                </span>
            </div>

            {/* Placeholder for Additional Content */}
            <div className='w-100 p-10p bsbb'>
                <div className='w-90 m-a'>
                    <span className='w-100 h-250p bsbb c-gray block'></span>
                </div>
            </div>
        </div>
    );
};
export default About;