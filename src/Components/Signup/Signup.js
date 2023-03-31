import Heading from "../Heading/Heading";
import Signupbackground from '../../Assets/Images/Signupbackground.jpg'
import { Link } from "react-router-dom";

function Signup() {
    return (
        <div className="signup-section">
            <Heading heading={'Signup'} image={Signupbackground} />

            <div className="fields-container">
                <div className="form-container">
                    <h1>Create New Account</h1>
                    <form onSubmit={e => e.defaultPrevented}>
                        <input type="text" name="firstname" placeholder="First Name" className="form-input"/>
                        <input type="text" name="lastname" placeholder="Last Name" className="form-input"/>
                        <input type="email" name="emialaddress" placeholder="Email Address" className="form-input"/>
                        <input type="text" name="username" placeholder="Username" className="form-input"/>
                        <input type="password" name="password" placeholder="Password" className="form-input"/>
                        <input type="password" name="confirmpassword" placeholder="Confirm Password" className="form-input"/>

                        <input type="button" value="SIGN UP" className="cta-btn form-input"/>
                    </form>
                    <p>Already heave an account? <Link to={'/login'}>Signin</Link></p>
                </div>
            </div>
        </div>
    );
}

export default Signup;