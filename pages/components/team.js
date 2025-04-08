import React from 'react';

const Team = () => {
    return (
        <div className='w-100 p-40p bp-10p-resp bsbb' id='team'>
            <div className='w-100 p-20p bsbb'>
                <span className='py-10p pr-40p bb-4-s-theme capitalize fs-50p'>
                Meet Our Team.</span>
            </div>
            <div className='w-90 bfull-resp h-a m-a px-30p py-40p bp-20p-resp bsbb p-r'>
                <div className='w-100 h-a cntr w-100'>
                    <div className='left iblock'>
                        <div className='w-100  center card-1 br-50 w-50p h-50p'>
                            <span className='fs-18p black'>&lt;</span>
                        </div>
                    </div>
                    <div className='right iblock'>
                        <div className='w-100 center card-1 br-50 w-50p h-50p'>
                            <span className='fs-18p black'>&gt;</span>
                        </div>
                    </div>
                </div>
                <div className='w-100 p-10p bsbb'>
                    <div className='w-90 m-a'>
                        <div className='w-100 iblock'>
                            <div className='iblock mx-10p bsbb'>
                                <div className='card-1 br-10p ovh p-r iblock w-100 bsbb bfull-resp'>
                                    <div className='w-100 h-100 flex bblock-resp'>
                                        <div className='w-500p bw-100-resp bh-200p-resp h-470p bc-dgray'> 
                                        </div>
                                        <div className='w-100 p-10p bsbb'>
                                            <div className='p-20p left'>
                                                <span className='fs-30p capitalize ddgray'>John Doe</span>
                                                <p className='fs-20p ddgray'>Software Engineer</p>
                                                <p className='fs-17p dgray'>
                                                    John is a passionate developer with 5+ years of experience in building scalable web applications. He specializes in JavaScript frameworks, cloud computing, and agile methodologies. John has worked on numerous projects, ranging from small startups to large enterprises, and has a proven track record of delivering high-quality solutions. In his free time, John enjoys contributing to open-source projects, mentoring junior developers, and exploring the latest trends in technology. He believes in continuous learning and is always eager to take on new challenges. John's dedication to his craft and his ability to collaborate effectively with cross-functional teams make him an invaluable asset to any organization.
                                                </p>
                                            </div>
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

export default Team;