import Faqaccordian from '../Faqaccordian/Faqaccordian';
import faqlist from '../../Data/FAQs';
import './Faqsection.css'

function Faqsection() {

    return ( 
        <div className='faqsection'>
            <div className='faqcontainer'>
                <div className='faq-left'>
                    <h1> Frequently Asked Questions</h1>

                    <Faqaccordian faqlist={faqlist} />
                </div>

                <div className='faq-right'>
                    {/* Contains only a backgound */}
                </div>
            </div>
        </div>
     );
}

export default Faqsection;