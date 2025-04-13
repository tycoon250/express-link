import Link from 'next/link';

const Nav = () => {
    return (
        <div className="w-100 a p-f t-0 bg-white zi-10">
        <nav className="w-100 bc-white p-20p bsbb">
            <div className="w-100 h-a flex jc-sb">
                <div className='w-40 bfull-resp'>
                    <div className='center center w-300p bfull-resp h-100'>
                        <a className="h-100 p-r block w-a px-10p bsbb us-none no-outline td-none" href="#home">
                            <img 
                                src="/assets/logo-nav-trans.png" 
                                alt="logo"
                                className="fill w-100p h-80p center no-outline us-none"  
                            />
                        </a>

                    </div>
                </div>
                <div className="w-45 hidden-resp center-2" id="navbarNav">
                    <ul className="flex ls-none jc-sb py-10p bsbb m-0 w-70">
                        <li className="nav-item"><a className="td-none hover-theme ddgray" href="#about">About</a></li>
                        <li className="nav-item"><a className="td-none hover-theme ddgray" href="#features">Features</a></li>
                        {/* <li className="nav-item"><a className="td-none hover-theme ddgray" href="#faq">FAQ</a></li> */}
                        <li className="nav-item"><a className="td-none hover-theme ddgray" href="#reviews">Reviews</a></li>
                    </ul>
                    <ul className="flex ls-none jc-sb py-10p bsbb m-0 w-40">
                            <li className="w-100 right"><a className="td-none hover-2 black" href="#contact"><button className='capitalize bc-theme b-1-s-theme white br-5p py-13p px-14p hover-2 bold-2'>contact</button></a></li>

                    </ul>
                </div>
            </div>
        </nav>
    </div>
    );
};

export default Nav;