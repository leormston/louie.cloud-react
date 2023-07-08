import * as React from 'react';
import lg_logo from '../images/lg_logo.png';


export default function Footer() {
    return (
        <div className="footer">
                
            <p><img src={lg_logo} height="100px" width="100px" alt="logo"/></p>

            <p style={{color: "grey"}}>whatever i want to put into the footer</p>

        </div>  
    )
};
