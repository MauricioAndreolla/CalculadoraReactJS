import React from 'react';
import './Button.css';

export default (props) => {
    return (
        <>
            <button
                value={props.label}
                onClick={(e) => props?.onClick(e.target.value)}
                className={` 
                ${props.operation ? 'operation' : ''}
                ${props.double ? 'double' : ''}
                ${props.triple ? 'triple' : ''}
                `}
            >
                {props.label}
            </button>
        </>
    )

}


