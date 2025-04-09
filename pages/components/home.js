import React from 'react';


const HomePage = () => {
    return (
        <div id='home'>
            <div className='w-100 h-250p p-10p bsbb'>
                <span className='w-100 h-100 center'>
                    <img src="/assets/logo-nav.png"  className='contain w-500p h-250p bh-a-resp bfull-resp'/>
                </span>
            </div>
            <div className='w-100 h-a p-10p bsbb'>
                <div className='w-100 h-a center'>
                    <span className='center fs-50p ddgray bold-2 oswald capitalize'>Welcome to express link transportation</span>
                    <p className='theme capitalize nunito'>on time, every time because health can't wait.</p>
                </div>
            </div>
            <div className='text-content'>
                <div className='center w-60 m-a bfull-resp'>
                    <span className='ddgray fs-25p'>
                    At ExpressLink Medical Transportation, we provide more than just a ride—we deliver peace of mind. Based in Meridian, Idaho, we serve the Treasure Valley and beyond with reliable, safe, and timely non-emergency medical transport.
                    Founded in 2025, ExpressLink was built to meet a growing demand for dependable, patient-centered transportation. Our team is trained, compassionate, and always focused on getting you or your loved ones where they need to be safely and on time.
                    Whether it’s a routine appointment or a long-distance medical trip, we’re here to move care forward, one ride at a time.
                    </span>
                    <div className='w-100 h-a center py-30p mb-70p bsbb bsbb'>
                        <a href="#contact" className='td-none hover-2'>
                          <button className='capitalize bc-white b-1-s-theme theme br-40p p-20p hover-2 fs-18p'>Contact us</button>  
                        </a>
                        <span>
                        
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default HomePage;