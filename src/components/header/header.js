import React, {useEffect} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import './header.css';


const Header = ({total}) => {

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
                         alt="app-logo"
                         className="app-logo-img"/>
                    AppMovies
                </Link>
            <Link to='/playlist' className='app-logo'>Player { total ? <span className="total">({total})</span> : ''}</Link>
        </div>
    )
};

const mapStateToProps = ({player: {playlist}}) => {
    return {
        total: playlist.length
    }
}

export default connect(mapStateToProps)(Header);