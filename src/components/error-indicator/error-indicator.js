import React from 'react';
import './error-indicator.css';


const ErrorIndicator = () => {
    return(
        <div className="error">
            <div className="error-message">
                <p className="fa fa-exclamation-triangle"></p>
                <p>Ups!</p>
                <p>Something wrong, but we working about it!</p>
            </div>
        </div>
    )
}

export default ErrorIndicator;