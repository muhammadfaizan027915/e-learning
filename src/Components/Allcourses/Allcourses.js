import Courses from '../../Data/Courses'
import Coursecard from '../Coursecard/Coursecard'
import './Allcourses.css'
import Filtersidebar from '../Filtersidebar/Filtersidebar';

function Allcourses() {
    return ( 
        <div className='courses-container'>
            <Filtersidebar />
            
            <div className='allcourses'>
            {
                Courses.map(
                    ({image, price, heading, rating, students, lessons}, index) => 
                        <Coursecard image={image}
                            price={price} 
                            heading={heading} 
                            rating={rating} 
                            students={students} 
                            lessons={lessons} 
                            key={index}
                        />
                )
            }
            </div>
        </div>
     );
}

export default Allcourses;