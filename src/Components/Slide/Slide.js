import './Slide.css'
function Slide ({slidename, heading}) {
    return ( 
        <div className={slidename+' slide'}>
            <div className="slidecontent">
                <h3>START TO LEARNING TODAY</h3>
                <h1>{heading}</h1>

                <button className='cta-btn'>FIND COURSE</button>
            </div>
        </div>
     );
}

export default Slide;