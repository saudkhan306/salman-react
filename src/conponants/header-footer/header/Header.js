import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from './Navigation';
import TopStrip from './TopStrip';


function Header() {
    return (
        <header id="">
            <div className="topHeader">
                <TopStrip />
                <Navigation />                
            </div>
            <div className="mobileHeader d_f">
                <Link to="/" className="mblTpLogo"></Link>
            </div>
        </header>
    )
}

export default Header;
