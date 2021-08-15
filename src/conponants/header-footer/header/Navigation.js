import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom';
import { humbergurMenus } from '../../common/common';

/* importing Images */
import mainLogo from './../../../assets/images/teni_white.svg';

function Navigation() {

    const [hamburgerMenus, setHamburgerMenus] = useState(humbergurMenus);
    
    return (
        <div className="navMenuSec">
            <div className="container">
                <div className="navMenuCnt d_f">
                    <div className="logo">
                        <Link to="/" title="Teni | Wear Teni">
                            <img src={mainLogo} alt="Teni" />
                        </Link>
                    </div>
                    <div className="navMenu">
                        <nav className="nav">
                            <ul className="d_f">
                                <li><NavLink to="/product-listing">Men's Wear</NavLink></li>
                                <li><NavLink to="/womens-wear">Women's Wear</NavLink></li>
                                <li><NavLink to="/product-detail">Kid's Wear</NavLink></li>
                            </ul>
                        </nav>
                    </div>
                    <div className="cartIcn"> <Link to="/"> </Link> </div>
                    <div className="rightMenu hmbrgrMneuCnt d_f">
                        <div className="hmbrgrMenu">
                            <span className="line"></span>
                            <span className="line"></span>
                            <span className="line"></span>
                        </div>
                        <nav className="mega_menu d_f">
                            <span className="hoverBg"></span>
                            <ul className="megaLinks">
                                {
                                    hamburgerMenus.map((menu, index) => {
                                        return <li key={index}><Link to="/">{menu}</Link></li>
                                    })
                                }
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navigation;
