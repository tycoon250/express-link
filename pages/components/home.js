import React from 'react';


const HomePage = () => {
    return (
        <div id='home'>
            <div className='w-100 h-300p p-10p bsbb'>
                <span className='w-100 h-100 center'>
                    <img src="/assets/logo-nav.png"  className='contain w-500p h-300p bh-a-resp bfull-resp'/>
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
                    At express link Transportation, we get you where you need to be with swift, steadfast and secure travels. We are a small, locally owned and operated transportation company in the Boise, Idaho area.  express link Transportation was started in late 2019 because we saw a tremendous need for reliable, non-emergency medical transportation.  We have a friendly and expert staff, ready to serve you in the Treasure Valley region and beyond. Call us today for assistance in all your transportation needs.
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