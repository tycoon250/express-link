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
                    We are a non-emergency medical transportation provider offering ambulatory, wheelchair, and gurney/stretcher transport. Our commitment is simple: deliver care-focused, respectful, and timely service every single time.<br />
                    Our diverse team shares one belief—no one chooses illness or injury, but everyone deserves comfort, dignity, and access to the care they need. At ExpressLink, we bridge the gap between patients and providers, helping you get there with ease and compassion.
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