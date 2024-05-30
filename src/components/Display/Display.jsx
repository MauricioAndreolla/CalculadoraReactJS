import React, { useState } from 'react';
import './Display.css';

export default ({value}) => {

    return (
        <div className='display'>
            <h1>{value}</h1>
        </div>

    )

}


