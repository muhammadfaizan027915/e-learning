import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../Assets/Images/logo.png'
import logosticky from '../../Assets/Images/logosticky.png'
import './Navigationbar.css';

function Navigationbar({backgroundClass}) {

    const [stickyClass, setStickyClass] = useState(backgroundClass);

    useEffect(() => {
      window.addEventListener('scroll', stickNavbar);
  
      return () => {
        window.removeEventListener('scroll', stickNavbar);
      };
    }, []);
  
    const stickNavbar = () => {
      if (window !== undefined) {
        let windowHeight = window.scrollY;
        windowHeight > 60 ? setStickyClass('sticky-navigation colored') : setStickyClass(backgroundClass);
      }
    };

    return (
        <nav className={stickyClass} >
            <div className='navbar'>
                <div className="logo">
                    <img src={stickyClass === 'transparent' ? logo: logosticky} />
                </div>

                <div className="navigation">
                    <ul>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/courses'>Courses</Link></li>
                        <li><a href="">About</a></li>
                        <li><Link to='/contact-us'>Contact</Link></li>
                    </ul>
                </div>

                <div className="useroptions">
                    <ul>
                        <li><a href=""><i className="fa-solid fa-magnifying-glass"></i></a></li>
                        <li><Link to='/cart'><i className="fa-solid fa-bag-shopping"></i></Link></li>
                        <li><Link to='/login'><i className="fa-regular fa-user"></i></Link></li>
                        <li><a href=""><i className="fa-solid fa-bars"></i></a></li>
                    </ul>
                </div>
            </div>
        </nav>
      );
}

export default Navigationbar;