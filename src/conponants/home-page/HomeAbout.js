import React from 'react'
import { Link } from 'react-router-dom'


import mensWear from "../../assets/images/mensWear.png";
import womensWear from "../../assets/images/womensWear.png";
import kidsWear from "../../assets/images/kidsWear.png";
import womenWearIcon from "../../assets/images/womenWear_icon.svg";
import menWearIcon from "../../assets/images/menWear_icon.svg";
import kidWearIcon from "../../assets/images/kidsWear_icon.svg";

function HomeAbout() {
    return (
        <>
            <section className="hmAbtSec">
                <div className="container">
                    <div className="secHdngCnt txt_center">
                        <h1>What <span className="teniStrip _white">we</span> do</h1>
                    </div>
                    <div className="hmAbtSbTxt txt_center">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                        <h5>We are specialist in:</h5>
                    </div>
                    <div className="dsktpViewSec">
                        <div className="_1200">
                            <div className="spcilstInCnt">
                                <div className="spclstPrdctCnt _520 left mr_30">
                                    <div className="cntntBxCnt">
                                        <h1>Men's Wear</h1>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, 
                                            sed do eiusmod tempor incididunt ut labore.
                                        </p>
                                        <Link to="/" title="All Men's Wear">View All Products</Link>
                                    </div>
                                    <img src={mensWear} alt="Teni | Men's Wear" />
                                </div>
                                <div className="spclstPrdctCnt _645 right mb_30">
                                    <div className="cntntBxCnt txtRight">
                                        <h1>Women's Wear</h1>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, 
                                            sed do eiusmod tempor incididun labore et 
                                            dolore magna aliqua.
                                        </p>
                                        <Link to="/" title="All Men's Wear">View All Products</Link>
                                    </div>
                                    <img src={womensWear} alt="Teni | Women's Wear" />
                                </div>
                                <div className="spclstPrdctCnt _645 right">
                                    <div className="cntntBxCnt txtLeft">
                                        <h1>Kid's Wear</h1>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, 
                                            sed do eiusmod tempor incididun labore et 
                                            dolore magna aliqua.
                                        </p>
                                        <Link to="/" title="All Men's Wear">View All Products</Link>
                                    </div>
                                    <img src={kidsWear} alt="Teni | Kid's Wear" />
                                </div>
                            </div>
                            <span className="seeAllBtn txtCenter">
                                <Link to="/" className="">See All Categories</Link>
                            </span>
                        </div>
                    </div>
                    <div className="forMblView">
                        <ul className="hmCtgryIcnCnt">
                            <li>
                                <Link to="/">
                                    <img src={womenWearIcon} alt="Women Wear" />
                                    <span className="ctgryNm">Women's Wear</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/">
                                    <img src={menWearIcon} alt="Men Wear" />
                                    <span className="ctgryNm">Men's Wear</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/">
                                    <img src={kidWearIcon} alt="Kids Wear" />
                                    <span className="ctgryNm">Kid's Wear</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>   
        </>
    )
}

export default HomeAbout;
