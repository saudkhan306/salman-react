import React from 'react'

function PrevArrow({onClick}) {
    return (
        <span className="arrow _left" onClick={onClick}>
            <i className="fas fa-chevron-left"></i>
        </span>
    )
}

export default PrevArrow;
