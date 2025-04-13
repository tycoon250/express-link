import React from 'react';


const HomePage = () => {
    return (
        <div id='home' className='p-r h-100-f'>
            <div className='w-100 h-100 p-a zi--1'>
                <img src='/assets/wheel-chair.jpg' className="cover w-100 h-100" />
            </div>
            <div className='zi-10 bc-gradient-white h-100'>
                <div className='w-100 h-150p p-10p bsbb hide hidden-resp'>
                    <img src="/assets/logo-nav.png" className='contain w-500p h-250p bh-a-resp bfull-resp' />
                </div>
                <div className='w-40 bfull-resp h-a bp-10p-resp px-40p bsbb'>
                    <p className='theme capitalize fs-40p bold-2'>On time, every time because health can't wait !</p>
                </div>
                <div className='text-content'>
                    <div className='bcenter-500p-resp w-50 bfull-resp px-40p bp-10p-resp bsbb'>
                        <p className='ddgray fs-20p'>
                            Reliable and compassionate non-emergency medical transport in Meridian, Idaho, and beyond. Your safe and stress-free journey starts here.
                        </p>
                        <div className='w-100 h-a bcenter-500p-resp py-30p mb-70p bsbb'>
                            <a href="#contact" className='td-none hover-2'>
                                <button className='capitalize bc-theme b-1-s-theme white br-5p py-15p px-20p hover-2 fs-18p bold-2'>get in touch</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default HomePage;