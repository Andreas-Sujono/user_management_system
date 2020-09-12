import React from 'react';
import ReactLoading from 'react-loading';

import './style.scss'

function LoadingBar(props) {
    return (
        <div className="loading-container">
            <ReactLoading 
                type="spin" 
                color="black" 
                height={80} 
                width={80} 
            />
        </div>
    );
}

export default LoadingBar;