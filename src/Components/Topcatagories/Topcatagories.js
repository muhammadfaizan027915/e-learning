import Topcatagoriescard from '../Topcatagoriescard/Topcatagoriescard';
import topcatlist from '../../Data/Catagories';
import './Topcatagories.css';

function Topcatagories() {

    return (
        <div className='catagorysection'>
            <h5 className='sec-heading'>TOP CATEGORIES</h5>
            <h1 className='sec-tagline'>Popular Online Categories</h1>

            <div className='topcatagories'>
                {
                    topcatlist.map(
                        ({ image, icon, catagory, coursecount }, index) =>
                            <Topcatagoriescard image={image} icon={icon} catagory={catagory} coursecount={coursecount} key={index}/>
                    )
                }
            </div>

            <button className="cta-btn catagory-btn">VIEW ALL CATEGORIES</button>
        </div>
    );
}

export default Topcatagories;