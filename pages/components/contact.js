import React from 'react';

const Contact = () => {
    return (
        <div className='w-100 p-40p bp-10p-resp bsbb mb-40p p-r' id='contact'>
            <div className='w-100 p-20p bsbb'>
                <span className='py-10p pr-40p bb-4-s-theme capitalize fs-50p'>
                    <span className='py-5p'>Contact US</span>
                </span>
            </div>
            <div className='w-90 bfull-resp h-a m-a py-40p bp-20p-resp bsbb flex bblock-resp'>

                <div className=' w-50 bfull-resp h-a px-10p py-40p bp-20p-resp bsbb'>
                    <span className='ddgray fs-20p capitalize'>
                        <span className='py-5p'>Contact express link Medical Transportation and let us take care of any transportation needs.</span>
                        <span className='py-5p'>Call or message us for more info, or to make a reservation.</span>
                    </span>
                    <p className='ddgray fs-20p capitalize'>
                        <span className='py-5p'>express link Transportation LLC</span><br/>
                        <span className='py-5p'>1465 W. Deer Crest St</span><br/>
                        <span className='py-5p'>Meridian, ID 83646</span>
                    </p>
                    <p className='ddgray fs-20p'>
                        <a href="mailto:dianezbusiness@yahoo.com" className='ddgray fs-20p theme block py-5p bsbb td-none hover-2'>
                            <span className='py-5p'>dianezbusiness@yahoo.com</span>
                        </a>
                        <a href="mailto:markz_millan90@yahoo.com" className='ddgray fs-20p theme block py-5p bsbb td-none hover-2'>
                            <span className='py-5p'>markz_millan90@yahoo.com</span>
                        </a>
                    </p>
                    <p className='ddgray fs-20p capitalize'>
                        <a href="tel:+18175035144" className='ddgray fs-20p theme block py-5p bsbb td-none hover-2'>
                            <span className='py-5p'>+1 (817) 503-5144</span>
                        </a>
                        <a href="tel:+18173786479" className='ddgray fs-20p theme block py-5p bsbb td-none hover-2'>
                            <span className='py-5p'>+1 (817) 378-6479</span>
                        </a>
                    </p>
                </div>
                <div className='w-100 p-10p bsbb bp-0-resp'>
                    <div className='w-70 m-a bfull-resp'>
                    <span className="right w-100 h-100  p-r">
                        <div className="w-100 h-100 p-10p bp-0-resp bsbb">
                            <form method="post" name="contact_form" onSubmit={(e)=>{e.preventDefault()}} className="p-10p bp-0-resp bsbb" id="contact-form">
                                <div className="w-100 h-60p mt-10p mb-10p p-10p bsbb flex">
                                    <div className="w-100 igrid mr-10p left parent p-r">
                                        <input type="text" name="firstname" placeholder="First Name" className="p-20p no-outline bsbb b-1-s-dgray bc-white main-input w-100 br-10p" />
                                        <span className="p-a r-0 mt-10p mr-5p">
                                        </span>
                                        <small className="red verdana hidden ml-5p">error mssg</small>
                                    </div>
                                    <div className="p-r w-100 igrid parent">
                                        <input type="text" name="lastname" placeholder="Last Name" className="p-20p no-outline bsbb b-1-s-dgray bc-white main-input w-100 br-10p" />
                                        <span className="p-a r-0 mt-10p mr-5p">
                                        </span>
                                        <small className="red verdana left hide ml-5p">error mssg</small>
                                    </div>
                                </div>
                                <div className="w-100 h-60p mt-10p mb-10p p-10p bsbb flex">
                                    <div className="p-r w-100 igrid mr-10p left parent p-r">
                                        <input type="text" name="email" placeholder="Email" className="p-20p no-outline bsbb b-1-s-dgray bc-white main-input w-100 br-10p" />
                                        <span className="p-a r-0 mt-10p mr-5p">
                                        </span>
                                        <small className="red verdana hidden ml-5p">error mssg</small>
                                    </div>
                                    <div className="p-r w-100 igrid left parent p-rt">
                                        <input type="number" name="phonenumber" placeholder="Phone number" className="p-20p no-outline bsbb b-1-s-dgray bc-white main-input w-100 br-10p" id="phonenumber" />
                                        <span className="p-a r-0 t-0 mt-10p mr-10p center">
                                        </span>
                                        <small className="red verdana left hidden ml-5p p-a w-100 mt-40p nowrap">error mssg</small>
                                    </div>
                                </div>
                                <div className="w-100 h-60p mt-10p mb-10p p-10p bsbb">
                                    <div className="p-r w-100 igrid mr-10p left parent">
                                        <input type="text" name="subject" placeholder="Subject" className="p-20p no-outline bsbb b-1-s-dgray bc-white main-input w-100 br-10p" />
                                        <span className="p-a r-0 mt-10p mr-5p">
                                        </span>
                                        <small className="red verdana hidden ml-5p">error mssg</small>
                                    </div>
                                </div>
                                <div className="w-100 h-60p mt-10p mb-10p p-10p bsbb">
                                    <div className="p-r w-100 igrid mr-10p left parent">
                                        <textarea rows="4" cols="50" placeholder="Message" name="message" className="p-20p no-outline bsbb b-1-s-dgray bc-white main-input w-100 br-10p"></textarea>
                                        <span className="p-a r-0 mt-10p mr-5p">

                                        </span>
                                        <small className="red verdana hidden ml-5p">error mssg</small>
                                    </div>
                                </div>
                                <div className="w-a  h-60p mt-10p p-r right mb-10p p-10p bsbb">
                                    <div className="w-100 igrid">
                                        <span className="center iblock">
                                            <button type="submit" className="bc-theme br-2p hover-2 p-15p b-none w-150p br-10p">
                                                <span className="verdana white fs-15p capitalize">send message</span>
                                            </button>
                                        </span>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;