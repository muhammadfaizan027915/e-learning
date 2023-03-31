import Coursecard from "../Coursecard/Coursecard";
import popularcourseslist from "../../Data/Courses";
import './Popularcourses.css'

function Popularcourses() {

    return (
        <div className="popularcoursessction">
            <h5 className="sec-heading">SELECT COURSES</h5>
            <h1 className="sec-tagline">Explore Popular Courses</h1>

            <div className="popularcourses">
                {
                    popularcourseslist.map(
                        ({image, price, heading, rating, students, lessons}, index) => 
                            <Coursecard image={image} price={price} heading={heading} rating={rating} students={students} lessons={lessons} key={index}/>
                    )
                }
            </div>
        </div>
    );
}

export default Popularcourses;