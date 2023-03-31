import React from 'react'
import Coursereviews from '../../Data/Coursereviews'
import Coursereview from '../Coursereview/Coursereview'
import './Reviews.css'

export default function Reviews() {
    return (
        <div className='course-reviews'>
            {
                Coursereviews.map(
                    ({name, review, comment}) => (
                        <Coursereview
                            name={name}
                            review={review}
                            comment={comment}
                        />
                    )
                )
            }
        </div>
    )
}
