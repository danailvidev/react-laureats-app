import React from 'react';
import laureates from './laureates.jpg'

const Header = (props) => (
    <header className="row">
        <div className="col-md-5">
            <img src={laureates} alt="logo" className="logo"/>
        </div>
        <div className="col-md-7 mt-5 mb-5 subtitle">
            {props.subtitle}
        </div>
    </header>
);

export default Header;