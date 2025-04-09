import React from 'react';

const Footer = () => {
    return (
        <div class="body w-100 h-100 p-10p bsbb ">
        <div class=" bsbb w-100 igrid">
            <div class="w-100 h-a br-10p">
                <p class="ls-none center p-0 w-100 m-0">
                    <span class="left capitalize verdana fs-10p dgray p-10p bsbb center">
                        <span class="nowrap dgray fs-11p">
                            <span class="center-2">
                            &copy;{new Date().getFullYear()}
                                    &nbsp;ExpressLink All Rights Reserved <span class="fs-18p p-5p bsbb center mt--10p">
                                        .
                                        </span>
                                        <span class="center-2">
                                        <span class="fs-11p p-5p bsbb center-2">
                                            Designed by <a target="_blank" href="https://github.com/tycoon250" class="td-none ls-n"><span class="nowrap hover-2 theme dgray px-5p">Himself</span></a>
                                        </span>
                        </span>
                                </span>
                            </span>
                        <span class="center-2">
                            <a target="_blank" href="#about" class="td-none ls-n"><span class="nowrap hover-6 dgray">About us</span></a>
                            <span class="fs-18p p-5p bsbb center mt--10p">
                            .
                            </span>
                            <a target="_blank" href="#home" class="td-none ls-n"><span class="nowrap hover-6 dgray">Home</span></a>
                        </span>
                    </span>
                </p>
            </div>
        </div>
        </div>
    );
};


export default Footer;