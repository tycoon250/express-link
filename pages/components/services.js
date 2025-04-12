import React from 'react';

const Services = () => {
    return (
        <div className='w-100 p-40p bp-10p-resp bsbb' id='features'>
            <div className='w-100 p-20p bsbb'>
                <span className='py-10p pr-40p bb-4-s-theme capitalize fs-40p'>
                    Our services
                </span>
            </div>
            <div className='w-90 bfull-resp h-a m-a px-30p py-40p bp-20p-resp bsbb'>
                <p className='ddgray fs-30p'>
                    Express Link Medical Transportation offers non-emergency medical transport services tailored to your needs. Whether ambulatory, wheelchair, or gurney transportation, we ensure comfort, care, and security for your loved ones. Serving a 500-mile radius from Boise, ID, we go the extra mile to provide personalized services, including pillows, music, or even airport rides. Choose Express Link for peace of mind and exceptional care.
                </p>
            </div>
            <div className='w-100 p-10p bsbb'>
                <div className='w-70 m-a bfull-resp'>
                    <div className='w-100 iblock'>
                        {/* Ambulatory Transportation */}
                        <div className='iblock mx-10p bsbb bfull-resp bm-a-resp bp-y-10p-resp'>
                            <div className='card-1 br-10p ovh p-r iblock w-350p bsbb bfull-resp'>
                                <div className='w-100 h-100'>
                                    <div className='w-100 h-270p bc-dgray'>
                                        <img src='../assets/ambulatory.jpg' alt='Ambulatory Transportation' className='cover w-100 h-100'/>
                                    </div>
                                    <div className='w-100 center p-10p bsbb'>
                                        <div className='py-20p'>
                                            <h3 className='fs-25p capitalize ddgray'>Ambulatory Transportation</h3>
                                            <p className='fs-16p dgray block py-20p'>For passengers who can walk on their own or with assistance.</p>
                                            <a href="#contact" className='td-none hover-2'>
                                                <button className='capitalize bc-white b-1-s-theme theme br-5p p-10p hover-2'>Contact Us</button>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Wheelchair Transportation */}
                        <div className='iblock mx-10p bsbb bfull-resp bm-a-resp bp-y-10p-resp'>
                            <div className='card-1 br-10p ovh p-r iblock w-350p bsbb bfull-resp'>
                                <div className='w-100 h-100'>
                                    <div className='w-100 h-270p bc-dgray'>
                                        <img src='../assets/wheel-chair.jpg' alt='Wheelchair Transportation' className='cover w-100 h-100'/>
                                    </div>
                                    <div className='w-100 center p-10p bsbb'>
                                        <div className='py-20p'>
                                            <h3 className='fs-25p capitalize ddgray'>Wheelchair Transportation</h3>
                                            <p className='fs-16p dgray block py-20p'>Secure, assisted rides for wheelchair users.</p>
                                            <a href="#contact" className='td-none hover-2'>
                                                <button className='capitalize bc-white b-1-s-theme theme br-5p p-10p hover-2'>Contact Us</button>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Gurney/Stretcher Transportation */}
                        <div className='iblock mx-10p bsbb bfull-resp bm-a-resp bp-y-10p-resp'>
                            <div className='card-1 br-10p ovh p-r iblock w-350p bsbb bfull-resp'>
                                <div className='w-100 h-100'>
                                    <div className='w-100 h-270p bc-dgray'>
                                        <img src='../assets/gurney.jpg' alt='Gurney Transportation' className='cover w-100 h-100'/>
                                    </div>
                                    <div className='w-100 center p-10p bsbb'>
                                        <div className='py-20p'>
                                            <h3 className='fs-25p capitalize ddgray'>Gurney/Stretcher Transportation</h3>
                                            <p className='fs-16p dgray block py-20p'>For clients who require transport lying down.</p>
                                            <a href="#contact" className='td-none hover-2'>
                                                <button className='capitalize bc-white b-1-s-theme theme br-5p p-10p hover-2'>Contact Us</button>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;