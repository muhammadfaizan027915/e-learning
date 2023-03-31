import React from 'react'
import Heading from '../Components/Heading/Heading'
import Coursedetail from '../Components/Coursedetail/Coursedetail'

export default function CoursedetailPage() {
  return (
    <>  
        <Heading heading={'React App Development'} image={require('../Assets/Images/Signupbackground.jpg')}/>
        <Coursedetail />
    </>
  )
}
