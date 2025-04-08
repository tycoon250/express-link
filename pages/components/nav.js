import Link from 'next/link';

const Nav = () => {
    return (
        <div className="w-100 a p-f t-0 bg-white zi-10">
        <nav className="w-100 bc-white p-20p bsbb">
            <div className="w-100 h-a flex jc-sb">
                <div className='w-50 bfull-resp'>
                    <div className='center center w-300p bfull-resp h-100'>
                        <a className="h-100 p-r block w-a px-10p bsbb us-none no-outline td-none" href="#home">
                            <img 
                                src="/assets/logo-nav.png" 
                                alt="logo"
                                className="fill w-250p h-70p center no-outline us-none"  
                            />
                        </a>

                    </div>
                </div>
                <div className="w-45 hidden-resp center-2" id="navbarNav">
                    <ul className="flex ls-none jc-sb py-10p bsbb m-0 w-90">
                        <li className="nav-item"><a className="td-none hover-2 black" href="#about">About</a></li>
                        <li className="nav-item"><a className="td-none hover-2 black" href="#features">Features</a></li>
                        <li className="nav-item"><a className="td-none hover-2 black" href="#team">Our team</a></li>
                        <li className="nav-item"><a className="td-none hover-2 black" href="#faq">FAQ</a></li>
                        <li className="nav-item"><a className="td-none hover-2 black" href="#revies">Reviews</a></li>
                        <li className="nav-item"><a className="td-none hover-2 black" href="#contact">Contact</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
    );
};

export default Nav;