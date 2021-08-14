import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import { welcomeText, topSocialMedia } from '../../common/common';


function TopStrip() {
    const [socialMedia, setSocialMedia] = useState(topSocialMedia);
    return (
        <div className="topStrip">
            <div className="container">
                <div className="left wlcmTxt">
                    <p>{welcomeText}</p>
                </div>
                <div className="right">
                    <ul className="tpLnks right">
                        <li><Link to="/">Contact</Link></li>
                        <li><Link to="/">Login</Link></li>
                    </ul>
                    <ul className="tpSocialCnt right">
                        {
                            socialMedia.map((socialLink, index) => {
                                return <li key={index}>
                                    <a href={socialLink.link} target="_blank">
                                        <i className={socialLink.className}></i>
                                    </a>
                                </li>
                            })
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default TopStrip;
