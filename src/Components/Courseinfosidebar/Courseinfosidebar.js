import React from 'react'
import Courseinfo from '../../Data/Courseinfo'
import './Courseinfosidebar.css'

export default function Courseinfosidebar() {
    return (
        <div className='courseinfosidebar'>
            <div className="videoprice">
                <div className="previewvideo">
                    <iframe src="https://www.youtube.com/embed/_1ulFLvJDTg" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    <span className='previewvideo-text'>
                        Preview this course
                    </span>
                </div>
                <div className="pricesection">
                    <h2>{`${Courseinfo.price} $`}</h2>
                </div>
            </div>

            <div className="courserating-review">
                <h5>{`${Courseinfo.rating} Rating`}</h5>
                <h5>{`${Courseinfo.reviews} Reviews`}</h5>
            </div>

            <div className="courseinfo-section">
                <ul>
                    <li>
                        <div className='courseinfo-left'>
                            <i className="fa-solid fa-layer-group"></i>
                            <span>Level</span>
                        </div>
                        <div className="courseinfo-right">
                            <span>{Courseinfo.level}</span>
                        </div>
                    </li>
                    <li>
                        <div className='courseinfo-left'>
                            <i className="fa-solid fa-paste"></i>
                            <span>Lectures</span>
                        </div>
                        <div className="courseinfo-right">
                            <span>{Courseinfo.lectures}</span>
                        </div>
                    </li>
                    <li>
                        <div className="courseinfo-left">
                            <i className="fa-solid fa-language"></i>
                            <span>Language</span>
                        </div>
                        <div className="courseinfo-right">
                            <span>{Courseinfo.language}</span>
                        </div>
                    </li>
                    <li>
                        <div className="courseinfo-left">
                            <i className="fa-solid fa-puzzle-piece"></i>
                            <span>Quizzes</span>
                        </div>
                        <div className="courseinfo-right">
                            <span>{Courseinfo.quizzes}</span>
                        </div>
                    </li>
                    <li>
                        <div className="courseinfo-left">
                            <i className="fa-solid fa-user-group"></i>
                            <span>Students</span>
                        </div>
                        <div className="courseinfo-right">
                            <span>{Courseinfo.totalStudents}</span>
                        </div>
                    </li>
                    <li>
                        <div className="courseinfo-left">
                            <i className="fa-solid fa-clock"></i>
                            <span>Duration</span>
                        </div>
                        <div className="courseinfo-right">
                            <span>{Courseinfo.duration}</span>
                        </div>
                    </li>
                </ul>
            </div>

            <div className="coursebuybuttons">
                <button className='cta-btn course-btn'>Buy Now</button>
                <button className='cta-btn course-btn'>Add to cart</button>
            </div>
        </div>
    )
}
