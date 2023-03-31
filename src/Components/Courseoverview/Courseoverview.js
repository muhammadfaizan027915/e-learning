import React from 'react'
import Coursecontentlist from '../../Data/Coursecontnetlist'
import Courserequirements from '../../Data/Courserequirements'
import './Courseoverview.css'

export default function Courseoverview() {
    return (
        <div className='course-overview'>
            <h3>Course Details</h3>
            <p>
                COMPLETELY REDONE WITH OVER 500 BRAND NEW VIDEOS!

                Hi! Welcome to the brand new version of The Web Developer Bootcamp, Udemy's most popular web development course.  This course was just completely overhauled to prepare students for the 2022 job market, with over 60 hours of brand new content. This is the only course you need to learn web development. There are a lot of options for online developer training, but this course is without a doubt the most comprehensive and effective on the market
            </p>

            <h3>What you'll learn?</h3>
            <ul className='course-contenttolearn'>
                {
                    Coursecontentlist.map(
                        (content, index) => (
                            <li key={index} ><p>{content}</p></li>
                        )
                    )
                }
            </ul>

            <h3>Requirements</h3>
            <ul className='course-requirements'>
                {
                    Courserequirements.map(
                        (requirement, index) => (
                            <li key={index}><p>{requirement}</p></li>
                        )
                    )
                }
            </ul>
        </div>
    )
}
