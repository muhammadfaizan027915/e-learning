import React from 'react';
import Heading from '../Components/Heading/Heading'
import Paymentsummary from '../Components/Paymentsummary/Paymentsummary'

const CheckoutPage = (props) => {
    
    console.log(props.state)
    return (
        <> 
            <Heading heading={"Checkout"} image={require('../Assets/Images/Signupbackground.jpg')}/>
            <Paymentsummary />
        </>
    );
}

export default CheckoutPage;
