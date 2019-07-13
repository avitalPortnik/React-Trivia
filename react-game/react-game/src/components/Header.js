import React from 'react';
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <header style={headerStyle}>
            <Link style={linkStyle} to="/">Home</Link> | <Link style={linkStyle} to="/QuestionGame"> Trivia </Link> 
             | <Link style={linkStyle} to="/Board"> X/O </Link>
        </header>
    )
};

const headerStyle = {
    background:'#6AA4BA' ,
    color: '#fff',
    textAlign: 'center',
    padding: '10px'
};

const linkStyle = {
    color: '#fff',
    textDecoration: 'none'
};

export default Header;