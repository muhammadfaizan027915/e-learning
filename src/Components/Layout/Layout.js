import React from 'react';
import Navigationbar from '../Navigationbar/Navigationbar';
import Footer from '../Footer/Footer';
import { Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <>
            <Navigationbar backgroundClass={'colored'}/>
            <Outlet />
            <Footer />
        </>
    );
}

export default Layout;
