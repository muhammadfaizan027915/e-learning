import React from 'react'
import Instructor from '../../Data/Instructor'
import './Courseinstructor.css'

export default function Courseinstructor() {
  return (
    <div className='courseinstructor'>
        <div className='instructor-details'>
            <div className='instuctor-name'>
                <h2>{Instructor.name}</h2>
                <p>{Instructor.expertise}</p>
            </div>

            <div className='instructor-image-rating'>
                <div className='image'>
                    <img src={Instructor.image} alt="Instructor" />
                </div>

                <div className="rating">
                    <ul>
                        <li>
                            <i class="fa-solid fa-star"></i>
                            <span>{`${Instructor.rating} Instructor Rating`}</span>
                        </li>
                        <li>
                            <i class="fa-sharp fa-solid fa-shield"></i> 
                            <span>{`${Instructor.reviews} Reviews`}</span>
                        </li>
                        <li>
                            <i class="fa-solid fa-user-group"></i>
                            <span>{`${Instructor.students} Students`}</span>
                        </li>
                        <li>
                            <i class="fa-sharp fa-solid fa-circle-play"></i>
                            <span>{`${Instructor.courses} Courses`}</span>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="Instructor-about">
                <p>
                    {Instructor.about}
                </p>
            </div>
        </div>
    </div>
  )
}
