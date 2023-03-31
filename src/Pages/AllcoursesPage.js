import Allcourses from "../Components/Allcourses/Allcourses";
import Heading from "../Components/Heading/Heading";
import Signupbackground from "../Assets/Images/Signupbackground.jpg"

function AllcoursesPage() {
    return (
        <>
            <Heading heading={'Courses'} image={Signupbackground} />
            <Allcourses />
        </>
    );
}

export default AllcoursesPage;