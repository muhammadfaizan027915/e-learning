import Contactinfo from "../../Data/Contactinfo"
import Contactcard from "../Contactcard/Contactcard";
import Contactform from "../Contactform/Contactform";
import './Contactdetails.css'

function Contactdetails() {
    return ( 
        <div className="contact-container">
            <div className="contactcard-container">
                {
                    Contactinfo.map(
                        ({icon, heading, detail}, index) => (
                            <Contactcard icon={icon} heading={heading} detail={detail} key={index}/>
                        )
                    )
                }
            </div>

            <div className="contactform-container">
                <Contactform />
            </div>
        </div>
     );
}

export default Contactdetails;