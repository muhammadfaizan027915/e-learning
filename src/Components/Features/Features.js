import Featurecard from '../Featurecard/Featurecard'
import featuresList from '../../Data/Features';
import './Features.css';

function Features() {

    return ( 
        
        <div className='featureslist'>
            {
                featuresList.map(
                    ({feature, image, tagline}, index) => <Featurecard feature={feature} image={image} tagline={tagline} key={index}/>
                )
            }
        </div>
        
     );
}

export default Features;