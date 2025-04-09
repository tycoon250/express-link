import React from 'react';

const Footer = () => {
    return (
        <div className="body w-100 h-100 p-10p bsbb ">
        <div className=" bsbb w-100 igrid">
            <div className="w-100 h-a br-10p">
                <p className="ls-none center p-0 w-100 m-0">
                    <span className="left capitalize verdana fs-10p dgray p-10p bsbb center">
                        <span className="nowrap dgray fs-11p">
                            <span className="center-2">
                            &copy;{new Date().getFullYear()}
                                    &nbsp;ExpressLink All Rights Reserved <span className="fs-18p p-5p bsbb center mt--10p">
                                        .
                                        </span>
                                        <span className="center-2">
                                        <span className="fs-11p p-5p bsbb center-2">
                                            Designed by <a target="_blank" href="https://github.com/tycoon250" className="td-none ls-n"><span className="nowrap hover-2 theme dgray px-5p">Himself</span></a>
                                        </span>
                        </span>
                                </span>
                            </span>
                        <span className="center-2">
                            <a target="_blank" href="#about" className="td-none ls-n"><span className="nowrap hover-6 dgray">About us</span></a>
                            <span className="fs-18p p-5p bsbb center mt--10p">
                            .
                            </span>
                            <a target="_blank" href="#home" className="td-none ls-n"><span className="nowrap hover-6 dgray">Home</span></a>
                        </span>
                    </span>
                </p>
            </div>
        </div>
        </div>
    );
};


export default Footer;