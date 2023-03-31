import './Heading.css'

function Heading({heading, image}) {
    return ( 
        <div className='heading-section' >
            <div className="image-section">
                <img src={image} alt="heading-image" />
            </div>
            <div className="heading">
                <h1>{heading}</h1>
            </div>
        </div>
     );
}

export default Heading;