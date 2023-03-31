import React from 'react';
import Coursecart from '../Components/Coursecart/Coursecart';
import Heading from '../Components/Heading/Heading'

const CoursecartPage = () => {
    return (
        <>
            <Heading heading={'Shopping Cart'} image={require('../Assets/Images/Signupbackground.jpg')}/>
            <Coursecart />
        </>
    );
}

export default CoursecartPage;
