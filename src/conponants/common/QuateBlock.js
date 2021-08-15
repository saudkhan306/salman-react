import React from 'react'
import { Link } from 'react-router-dom';

// import video from './../../assets/images/video.m4v';
// import videoBanner from './../../assets/images/videoBanner.jpg';

function QuateBlock() {
    return <section className="qouteSec">
        <div className="container">
            <div className="qoutBxCnt">
                <div className="qtCntntCnt d_f">
                    <div className="qtCntnt">
                        <h6>Do your need a <span className="_bold">Product Qoute</span> for</h6>
                        <h1 className="_bold">Your Own Brand/Company</h1>
                        <p>
                            Or Email us your project requirements to 
                            <a href="mailto:info@teni.online">
                                <u>info@teni.online</u>
                            </a>
                        </p>
                    </div>
                    <Link to="/" className="qtBtn">Lets get Start Today</Link>
                </div>
                {/* <video className="qoutBxVideo" autobuffer="true" autoPlay={true} controls loop="true" src={video} poster={videoBanner} preload="true"> */}
                {/* </video> */}
            </div>
        </div>
    </section>
}

export default QuateBlock;
