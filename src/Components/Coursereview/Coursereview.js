import React from 'react';
import './Coursereview.css'

const Coursereview = ({name, review, comment}) => {

    const reviewstars = (review, acc=[]) => {
        if (review > 0) {
           return reviewstars(--review, [...acc, review])
        }
        return acc
    }

    return (
        <div className='course-review'>
            <h4>{name}</h4>
            <div className='course-rating'>
                {
                    reviewstars(review).map(
                        star => (
                            <i class="fa-solid fa-star"></i>
                        )
                    )
                }
            </div>
            <div className="course-comment">
                <p>
                    {comment}
                </p>
            </div>
            <div className="comment-report">
                <p>Was this review helpful?</p>
                <ul>
                    <li>
                        <input type="radio" name="review-helpful" id="like" />
                        <label htmlFor="like">
                            <i class="fa-solid fa-thumbs-up"></i>
                        </label>
                    </li>
                    <li>
                        <input type="radio" name="review-helpful" id="dislike" />
                        <label htmlFor="dislike">
                            <i class="fa-solid fa-thumbs-down"></i>
                        </label>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Coursereview;
