import * as React from 'react';
import lg_logo from '../images/lg_logo.png';


export default function Home() {
    return (
        <div>
            <header className="App-header">
                <img src={lg_logo} height="200px" width="200px" alt="logo" />

                <p>louie.cloud</p>
                <small style={{color: "grey"}}>coming soon</small>

            </header>
        </div>  
    )
};
