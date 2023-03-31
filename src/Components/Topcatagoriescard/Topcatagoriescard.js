import './Topcatagoriescard.css'

function Topcatagoriescard({image, icon, catagory, coursecount}) {
    return ( 
        <div className="catagory">
            <div className="cat-image">
                <a href="">
                    <img src={image} alt="catagory-image" />
                </a>
            </div>

            <div className="cat-contnet">
                <div className="cat-content-img">
                    <img src={icon} alt="catagory-icon" />
                </div>

                <div className="cat-content-text">
                    <h4>{catagory}</h4>
                    <p>{coursecount<10? `0${coursecount} Courses`: `${coursecount} Courses`}</p>
                </div>
            </div>
        </div>
     );
}

export default Topcatagoriescard;