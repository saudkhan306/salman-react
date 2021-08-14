import React from 'react';
import { Link } from 'react-router-dom';


function Footer() {
    return (
        <>
            <footer>
                <div className="ftr_rightCnt right">
                    <div className="ftrSbscrbCnt">
                        <div className="ftrSbscrbSbCnt d_f">
                            <div className="scbcriptnCnt">
                                <h4>Subscribe with Us</h4>
                                <form action="" className="sbscrptnFrm left">
                                    <input type="email" id="" className="sbscrbInput" placeholder="Enter your email ID" />
                                    <button type="button">Submit</button>						
                                </form>
                            </div>
                            <div className="ftrFlwUs">
                                <h4>Stay connected</h4>
                                <ul className="tpSocialCnt left">
                                    <li><Link to="/"><i className="fab fa-facebook-f"></i></Link></li>
                                    <li><Link to="/"><i className="fab fa-twitter"></i></Link></li>
                                    <li><Link to="/"><i className="fab fa-whatsapp"></i></Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="ftr_leftCnt left">
                    <div className="ftrLnksCnt d_f">
                        <div className="ftrLnksBx">
                            <h5>Teni works</h5>
                            <ul className="links">
                                <li><Link to="/">Men's Wear</Link></li>
                                <li><Link to="/">Women's Wear</Link></li>
                                <li><Link to="/">Kid's Wear</Link></li>
                                <li><Link to="/">Wholesaler</Link></li>
                                <li><Link to="/">Retailer</Link></li>
                            </ul>
                        </div>
                        <div className="ftrLnksBx">
                            <h5>About</h5>
                            <ul className="links">
                                <li><Link to="/">About Us</Link></li>
                                <li><Link to="/">Contact Us</Link></li>
                                <li><Link to="/">Teni Series</Link></li>
                                <li><Link to="/">Testimonial</Link></li>
                            </ul>
                        </div>
                        <div className="ftrLnksBx">
                            <h5>Help</h5>
                            <ul className="links">
                                <li><Link to="/">Payments</Link></li>
                                <li><Link to="/">Shipping</Link></li>
                                <li><Link to="/">Personal Shipping</Link></li>
                                <li><Link to="/">Cancellations & Return</Link></li>
                                <li><Link to="/">FAQ’s</Link></li>
                            </ul>
                        </div>
                        <div className="ftrLnksBx">
                            <h5>Policy</h5>
                            <ul className="links">
                                <li><Link to="/">Return Policy</Link></li>
                                <li><Link to="/">Terms of Use</Link></li>
                                <li><Link to="/">Terms and Conditions</Link></li>
                                <li><Link to="/">FAQ's</Link></li>
                                <li><Link to="/">Site Map</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="cprytBarCnt">
                        <p className="left">
                            © 2019-2020 &nbsp;&nbsp; | &nbsp;&nbsp; 
                            All Rights Reserved &nbsp;&nbsp; | &nbsp;&nbsp;
                            <Link to="/"><u>wearteni.online</u></Link>
                        </p>
                        <p className="right">
                            Site Designed By: &nbsp;
                            <Link to="http://salmanraza.in" target="_blank">
                                <u>Salman Raza</u>
                            </Link>
                        </p>
                    </div>
                </div>
            </footer>   
        
            {/* Mobile Footer */}
            <div className="mobileFooter">
                <div className="mblFtrSbCnt d_f">
                    <div className="mblFtrBtnCnt d_f">
                        <div className="mblFtrBtn ftrMenuCnt">
                            <div className="hmbrgrMenu">
                                <span className="line"></span>
                                <span className="line"></span>
                                <span className="line"></span>
                            </div>
                        </div>
                        <div className="mblFtrBtn homeBtn"><Link to="/"></Link></div>
                        {/* <div className="mblFtrBtn usrBtn"><Link to="/"></Link></div> */}
                        <div className="mblFtrBtn whatsApp">
                            <Link to="https://wa.me/+917838367864">
                                <i className="fab fa-whatsapp"></i>
                            </Link>
                        </div>
                    </div>
                    <div className="shpingBtnCnt d_f">
                        <div className="mblFtrBtn shoppingCrt"></div>
                        <div className="buyWith" buytext="Buy Our Product on">
                            <Link to="/" className="shopBtn amazon"></Link>
                            <Link to="/" className="shopBtn myntra"></Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <div className="mblMenuOvrly hiddenLg">
                <span className="closeMenuOvrly">&times;</span>
                <div className="mblMenuCnt">
                    <ul className="mainMobileMenu">
                        <li className="dropDown">
                            <Link to="/">Men's Wear</Link>
                            <ul className="sub-menu">
                                <li><Link to="/">Jacket</Link></li>
                                <li><Link to="/">T-shirt</Link></li>
                                <li><Link to="/">Top Wear</Link></li>
                                <li><Link to="/">Under Wear</Link></li>
                            </ul>
                        </li>
                        <li className="dropDown">
                            <Link to="/">Women's Wear</Link>
                            <ul className="sub-menu">
                                <li><Link to="/">Jacket</Link></li>
                                <li><Link to="/">T-shirt</Link></li>
                                <li><Link to="/">Top Wear</Link></li>
                                <li><Link to="/">Under Wear</Link></li>
                            </ul>
                        </li>
                        <li className="dropDown">
                            <Link to="/">Kid's Wear</Link>
                            <ul className="sub-menu">
                                <li><Link to="/">Jacket</Link></li>
                                <li><Link to="/">T-shirt</Link></li>
                                <li><Link to="/">Top Wear</Link></li>
                                <li><Link to="/">Under Wear</Link></li>
                            </ul>
                        </li>
                        <li><Link to="/">Wholesaler</Link></li>
                        <li><Link to="/">Retailer</Link></li>
                    </ul>
                    <ul className="mainMobileMenu">
                        <li><Link to="/">About Us</Link></li>
                        <li><Link to="/">Contact Us</Link></li>
                        <li><Link to="/">Teni Series</Link></li>
                        <li><Link to="/">Testimonial</Link></li>
                    </ul>
                    <ul className="mainMobileMenu">
                        <li><Link to="/">Payments</Link></li>
                        <li><Link to="/">Shipping</Link></li>
                        <li><Link to="/">Personal Shipping</Link></li>
                        <li><Link to="/">Cancellations & Return</Link></li>
                        <li><Link to="/">FAQ’s</Link></li>
                        <li><Link to="/">Return Policy</Link></li>
                        <li><Link to="/">Terms of Use</Link></li>
                        <li><Link to="/">Terms and Conditions</Link></li>
                        <li><Link to="/">FAQ's</Link></li>
                        <li><Link to="/">Site Map</Link></li>
                    </ul>
                </div>						
            </div>            

            <span className="wtsAppStickyBtn hidden_mobile">
                <a href="https://wa.me/+971551532975"><i className="fab fa-whatsapp"></i></a>
            </span>
        </>
    )
}

export default Footer;
