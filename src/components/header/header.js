import React, {useEffect} from 'react';
import {Link} from 'react-router-dom';
import './header.css';


const Header = () => {

    useEffect(() => {
        const header = document.getElementById("header");
        const sticky = header.offsetTop;
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > sticky) {
                header.classList.add("sticky");
            } else {
                header.classList.remove("sticky");
            }
        })
    });

    return(
        <div className="app-header" id="header">
            <Link to="/" className="app-logo">
                <img src="https://cdn1.iconfinder.com/data/icons/wayfinding-system-basic-icon-set/512/cinema-512.png"
                     alt="app-logo"/>
                AppMovies
            </Link>
            <Link to='/playlist' className='app-logo'>Player</Link>
        </div>
    )
};

export default Header;