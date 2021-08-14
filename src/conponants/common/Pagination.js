import React from 'react'
import { Link } from 'react-router-dom';

function Pagination() {
    return <div className="pagintnCnt d_f">
        <span className="_btn prvBtn"><i className="fas fa-chevron-left"></i></span>
        <ul className="pageNumbrs">
            <li><Link to="/" className="active">1</Link></li>
            <li><Link to="/">2</Link></li>
            <li><Link to="/">3</Link></li>
            <li><Link to="/">4</Link></li>
        </ul>
        <span className="_btn nxtBtn"><i className="fas fa-chevron-right"></i></span>
    </div>
}

export default Pagination;
