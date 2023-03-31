import { Link } from 'react-router-dom';
import logo from '../../Assets/Images/logo.png'
import topcatlist from '../../Data/Catagories';
import './Footer.css'

function Footer() {
    return (
        <>
            <div className='footer'>
                <div className="footer-content">
                    <div className='foot-logo'>
                        <img src={logo} alt="" />
                        <p>
                            Educavo is an online plateform that provides online way of learning to the students and connects instructors and students remotely to spread skills all over the world at low and affordable prices. Educavo learnings are owned by developer Muhammad Faizan
                        </p>
                        <ul className='social-icons'>
                            <li><i className="fa-brands fa-facebook-f"></i></li>
                            <li><i className="fa-brands fa-twitter"></i></li>
                            <li><i className="fa-brands fa-pinterest"></i></li>
                            <li><i className="fa-brands fa-google-plus-g"></i></li>
                            <li><i className="fa-brands fa-instagram"></i></li>
                        </ul>
                    </div>
                    <div className='foot-address'>
                        <h5>ADDRESS</h5>
                        <ul className='address'>

                            <li><i className="fa fa-location-dot"></i> <p>Blue world city near Islambad International Airport, Islamabad, Pakistan</p></li>
                            <li><i className="fa fa-mobile"></i> <a href="tel:+923175659371">+923175659371</a></li>
                            <li><i className="fa fa-envelope"></i> <a href="mailto:muhammadfaizan027915gamil.com">muhammadfaizan027915gamil.com</a></li>
                        </ul>
                    </div>
                    <div className='foot-quicklinks'>
                        <h5>QUICK LINKS</h5>
                        <ul>
                            <li><Link to="/login">Login</Link></li>
                            <li><Link to="/cart">Cart</Link></li>
                            <li><Link to="">About</Link></li>
                            <li><Link to="/courses">Courses</Link></li>
                            <li><Link to="/contact-us">Contact</Link></li>
                        </ul>
                    </div>
                    <div className='foot-catagories'>
                        <h5>CATEGORIES</h5>
                        <ul>
                            {
                                topcatlist.map(
                                    ({ catagory }, index) => <li key={index}><a href="">{catagory}</a></li>
                                )
                            }
                        </ul>
                    </div>
                </div>

                <div className='foot-copyright'>
                    <hr />
                    <div className='copyright'>
                        <p>&copy; 2022 All rights reserved | <a href="">educavo.com</a></p>
                        <p>Developed by <a href="https://www.facebook.com/muhammadfaizan027915"><u> Muhammad Faizan</u></a></p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Footer;