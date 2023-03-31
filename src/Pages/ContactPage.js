import contactbackground from '../Assets/Images/contactbackground.jpg'
import Heading from '../Components/Heading/Heading';
import Contactdetails from '../Components/Contactdetails/Contactdetails';


function ContactPage() {
    return ( 
        <>
            <Heading heading={'Contact us'} image={contactbackground}/>
            <Contactdetails />
        </>
     );
}

export default ContactPage;