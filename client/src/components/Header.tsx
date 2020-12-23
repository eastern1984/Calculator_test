
import React from 'react';
import './app.css';

interface HeaderProps {

}

const Header: React.FC<HeaderProps> = props => {
    return (<>
            <header className="header">
                <h1 className="title">CALCULATOR</h1>
            </header>
        </>
    );
};

export default Header;