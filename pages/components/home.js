import React from 'react';


const HomePage = () => {
    return (
        <div id='home'>
            <div className='w-100 h-250p p-10p bsbb'>
                <span className='w-100 h-100 center'>
                    <img src="/assets/logo-nav.png" className='contain w-500p h-250p bh-a-resp bfull-resp' />
                </span>
            </div>
            <div className='w-100 h-a p-10p bsbb'>
                <div className='w-100 h-a center'>
                    <span className='center fs-40p ddgray bold-2 oswald capitalize'>Welcome to Express Link Transportation</span>
                    <p className='theme capitalize nunito'>On time, every time because health can't wait.</p>
                </div>
            </div>
            <div className='text-content'>
                <div className='center w-60 m-a bfull-resp'>
                    <span className='ddgray fs-20p'>
                        At ExpressLink Medical Transportation, we provide reliable, safe, and timely non-emergency medical transport in Meridian, Idaho, and beyond. Founded in 2025, we focus on dependable, patient-centered transportation with a compassionate team. Whether for routine appointments or long-distance trips, we ensure safe and timely service.
                    </span>
                    <div className='w-100 h-a center py-30p mb-70p bsbb'>
                        <a href="#contact" className='td-none hover-2'>
                            <button className='capitalize bc-white b-1-s-theme theme br-40p p-20p hover-2 fs-18p'>Contact us</button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default HomePage;