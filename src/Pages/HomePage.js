import Navigationbar from '../Components/Navigationbar/Navigationbar'
import Imageslider from '../Components/Imageslider/Imageslider'
import Topcatagories from '../Components/Topcatagories/Topcatagories';
import Popularcourses from '../Components/Popularcourses/Popularcourses';
import Registersection from '../Components/Registersection/Registersection';
import Faqsection from '../Components/Faqsection/Faqsection';
import Footer from '../Components/Footer/Footer';

function HomePage() {
    return ( 
        <>
            <Navigationbar backgroundClass={'transparent'}/>
            <Imageslider />
            <Topcatagories />
            <Popularcourses />
            <Registersection />
            <Faqsection />
            <Footer />
        </>
     );
}

export default HomePage;