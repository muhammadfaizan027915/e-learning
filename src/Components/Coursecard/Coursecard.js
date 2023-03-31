import './Coursecard.css'

function Popularcoursescard({image, price, heading, rating, students, lessons}) {
    return ( 
        <div className="pop-coursecard">
            <div className="pop-courseimage">
                <p>{price > 0? `$${price}.00`:'Free'}</p>
                <a href="">
                    <img src={image} alt="course-image" />
                </a>
            </div>

            <div className="pop-coursecontent">
                <div className="course-heading">
                    <a href="">
                        <h3>{heading}</h3>
                    </a>
                    <p className='rating'>({rating} rating)</p>
                </div>

                <div className="course-details">
                    
                    <p>
                        <i className="fa-solid fa-user"></i>
                        {students} Students
                    </p>
                    <p>
                        <i className="fa-solid fa-file"></i>
                        {lessons} Lessons
                    </p>
                </div>
            </div>
        </div>
     );
}

export default Popularcoursescard;