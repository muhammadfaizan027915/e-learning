import React from 'react';
import Instructor from '../../Data/Instructor'
import Courseinfo from '../../Data/Courseinfo';
import { Link } from 'react-router-dom';
import './Coursecart.css'

const Coursecart = () => {
    return (
        <div className='coursecart'>
            <div className="cart">
                <table>
                    <thead>
                        <tr>
                            <th></th>
                            <th>Title</th>
                            <th>Instructor</th>
                            <th>Lectures</th>
                            <th>Rating</th>
                            <th>Level</th>
                            <th>Price</th>
                            <th></th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td><img src={Courseinfo.image} alt="Course Image" /></td>
                            <td>{Courseinfo.name}</td>
                            <td>{Instructor.name}</td>
                            <td>{Courseinfo.lectures}</td>
                            <td>{Courseinfo.rating}</td>
                            <td>{Courseinfo.level}</td>
                            <td>{Courseinfo.price} $</td>
                            <td><a href=""><i className="fa-solid fa-trash"></i></a></td>
                        </tr>

                        <tr>
                           <td colSpan={7}>
                                <div className='totalprice'>
                                    <div className="totalprice">
                                        <span>Total Price: </span>
                                        <span>19.99 $</span>
                                    </div>
                                </div>
                            </td> 
                        </tr>
                    </tbody>
                </table>
            </div>

                <div className="checkout-btn">
                    <button className='cta-btn'><Link to='/checkout' >Checkout</Link></button>
                </div>
        </div>
    );
}

export default Coursecart;
