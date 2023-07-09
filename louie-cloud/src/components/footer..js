import * as React from 'react';
import lg_logo from '../images/lg_logo.png';
import { Grid } from '@mui/material';

export default function Footer() {
    
    return (
        <div className="footer">
            <p><img src={lg_logo} height="100px" width="100px" alt="logo"/></p>
            <div style={{textAlign:"center", width: "60%"}}>
                <Grid container spacing={2} >
                    <Grid item xs={12} sm={3}>
                    <a className="g-link" href={"/"}>Home</a>
                    </Grid>
                    <Grid item xs={12} sm={3}>
                    <a className="g-link" href={"/projects"}>Projects</a>
                    </Grid>
                    <Grid item xs={12} sm={3}>
                    <a className="g-link" href={"/Bio"}>Bio</a>
                    </Grid>
                    <Grid item xs={12} sm={3}>
                    <a className="g-link" href={"/Contact"}>Contact</a>
                    </Grid>
                </Grid>
            </div>
            

        </div>  
    )
};
