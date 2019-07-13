import React from 'react';
import image from '../assets/logo.png';

import '../css/logo.css';

const logo= (props)=>(
    <div className="Logo">
         <img src={image} alt="logo"/>
    </div> 
);
   


export default logo;