import * as React from 'react';
import '../Custom.css';
import '../App.css';
import NavigationBar from './nav';
import Content from './aboutUs';
import Footer from './footer';


function Master() {
    return(
        <>
            <NavigationBar />
            <Content />
            <Footer />
        </>
    )
}

export default Master;