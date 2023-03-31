import './Imageslider.css'
import Slide from '../Slide/Slide';
import Features from '../Features/Features';

function Imageslider() {

    let slideNext = () => {
        let target = document.querySelector('.slidescontainer')
        target.scrollLeft =  target.scrollLeft + target.clientWidth
    }

    let slidePrev = () => {
        let target = document.querySelector('.slidescontainer')
        target.scrollLeft = target.scrollLeft - target.clientWidth
    }

    let headings = [
        'Online Courses From Leading Experts', 
        'Explore Intrests and Career With Courses'
    ]

    return (
        <div className='herocontainer'>
            <div className="slidescontainer" >
                {
                    headings.map(
                        (heading, index) => <Slide heading={heading} slidename={`slide${index + 1}`} key={index} />
                    )
                }
            </div>
            <a className='prev-btn' onClick={slidePrev}><i className="fa-solid fa-chevron-left"></i></a>
            <a className='next-btn' onClick={slideNext}><i className="fa-solid fa-chevron-right"></i></a>

            <Features />
        </div>
    );
}

export default Imageslider;