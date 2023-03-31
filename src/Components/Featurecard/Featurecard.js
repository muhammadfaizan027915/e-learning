import './Featurecard.css'

function Featurecard({ image, feature, tagline }) {
    return (
        <div className="feature">
            <div className="ft-image">
                <img src={image} alt="feature" />
            </div>

            <div className="ft-content">
                <h4>{feature}</h4>
                <p>{tagline}</p>
            </div>
        </div>
    );
}

export default Featurecard;