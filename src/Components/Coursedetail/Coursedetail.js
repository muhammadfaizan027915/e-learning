import React from 'react'
import Coursedetailstabs from '../Coursedetailstabs/Coursedetailstabs'
import Courseinfosidebar from '../Courseinfosidebar/Courseinfosidebar'
import './Coursedetail.css'

export default function Coursedetail() {
  return (
    <div className='course-detial'>
        <Coursedetailstabs />
        <Courseinfosidebar />
    </div>
  )
}
