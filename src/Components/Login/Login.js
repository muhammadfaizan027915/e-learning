import Heading from '../Heading/Heading'
import Loginbackground from '../../Assets/Images/Loginbackground.jpg'
import { Link } from 'react-router-dom';

function Login() {
    return ( 
        <div className="signup-section">
            <Heading heading={'Login'} image={Loginbackground} />

            <div className="fields-container">
                <div className="form-container login-container">
                    <h1>Login Account</h1>
                    <form onSubmit={e => e.defaultPrevented}>
                        <input type="email" name="emialaddress" placeholder="Email Address" className="form-input"/>
                        <input type="password" name="password" placeholder="Password" className="form-input"/>

                        <input type="button" value="LOGIN" className="cta-btn form-input"/>
                    </form>
                    <p>Already heave an account? <Link to={'/signup'}>Create an account</Link></p>
                </div>
            </div>
        </div>
     );
}

export default Login;