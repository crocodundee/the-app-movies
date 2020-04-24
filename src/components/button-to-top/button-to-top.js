import React, {useEffect} from 'react';
import './button-to-top.css';


const TopButton = () => {

    useEffect(() => {
        const button = document.getElementsByClassName('btn-to-top')[0];
        window.addEventListener('scroll', () => {
            if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
                button.style.display = "block";
            } else {
                button.style.display = "none";
            }
        })
    });

    const scrollTop = () => {
        window.scrollTo({top: 0, behavior: "smooth"})
    };

    return(
        <button className="btn-round btn-to-top" onClick={() => scrollTop()}>
            <i className="fa fa-long-arrow-up"></i>
        </button>
    )
};

export default TopButton;