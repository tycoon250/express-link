import About from './components/about';
import Contact from './components/contact';
import FAQ from './components/faq';
import Footer from './components/footer';
import HomePage from './components/home';
import Nav from './components/nav';
import Reviews from './components/reviews';
import Services from './components/services';
import Team from './components/team';

export default function Home() {
    return (
        <div className='p-r h-a p-0 m-0'>
            <Nav />
            <div className='nv-skipper w-100 block h-120p'></div>
            <HomePage />
            <About/>
            <Services/>
            <Team/>
            <FAQ/>
            <Reviews/>
            <Contact/>
            <Footer/>
        </div>
    );
}
