import './Filtersidebar.css'
import Catagories from '../../Data/Catagories'

function Filtersidebar() {
    return (
        <div className='filtersidebar'>
            <div className='coursesearchbar'>
                <h4>Course Search</h4>
                <div className='searchfield'>
                    <input type="text" name="serach" id="course-search" placeholder='Searching...' />
                    <a href=""><i className='fa-solid fa-magnifying-glass'></i></a>
                </div>
            </div>

            <div className='filterscontainer'>
                <h4>Filter By</h4>
                <div className='skillsfilter'>
                    <h5>Skill Level</h5>

                    <div className='radio-container'>
                        <input type="checkbox" name="" id="beginner" />
                        <label htmlFor="beginner">Beginner</label>
                    </div>

                    <div className='radio-container'>
                        <input type="checkbox" name="" id="intermediate" />
                        <label htmlFor="intermediate">Intermediate</label>
                    </div>

                    <div className='radio-container'>
                        <input type="checkbox" name="" id="Expert" />
                        <label htmlFor="Expert">Expert</label>
                    </div>
                </div>

                <div className='price-lvel'>
                    <h5>Price Level</h5>

                    <div className='radio-container'>
                        <input type="checkbox" name="" id="free" />
                        <label htmlFor="free">Free</label>
                    </div>

                    <div className='radio-container'>
                        <input type="checkbox" name="" id="paid" />
                        <label htmlFor="paid">Paid</label>
                    </div>

                </div>

                <div className="durationtime">
                    <h5>Duration Time</h5>
                    <div className='radio-container'>
                        <input type="checkbox" name="" id="5-hours" />
                        <label htmlFor="5-hours">5+ hours</label>
                    </div>

                    <div className='radio-container'>
                        <input type="checkbox" name="" id="10-hours" />
                        <label htmlFor="10-hours">10+ hours</label>
                    </div>

                    <div className='radio-container'>
                        <input type="checkbox" name="" id="15-hours" />
                        <label htmlFor="15-hours">15+ hours</label>
                    </div>
                </div>

                <div className='rating'>
                    <h5>Rating</h5>
                    <div className='radio-container'>
                        <input type="radio" name="rating" id="4.5-up" />
                        <label htmlFor="4.5-up">
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star-half"></i>
                            <span>{'4.5 & up'}</span>
                        </label>
                    </div>

                    <div className='radio-container'>
                        <input type="radio" name="rating" id="4.0-up" />
                        <label htmlFor="4.0-up">
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <span>{'4.0 & up'}</span>
                        </label>
                    </div>

                    <div className='radio-container'>
                        <input type="radio" name="rating" id="3.5-up" />
                        <label htmlFor="3.5-up">
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star-half"></i>
                            <span>{'3.5 & up'}</span>
                        </label>
                    </div>

                    <div className='radio-container'>
                        <input type="radio" name="rating" id='3.0-up' />
                        <label htmlFor="3.0-up">
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <span>{'3.0 & up'}</span>
                        </label>
                    </div>
                </div>

                <div className='filter-catagories' s>
                    <h5>Category</h5>
                    {
                        Catagories.map(
                            ({ catagory }, index) => (
                                <div className='radio-container' key={index}>
                                    <input type="checkbox" name="" id={catagory} />
                                    <label htmlFor={catagory}>{catagory}</label>
                                </div>
                            )
                        )
                    }
                </div>
            </div>

        </div>
    );
}

export default Filtersidebar;