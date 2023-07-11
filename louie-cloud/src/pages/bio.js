import * as React from 'react';
import TechStack from '../components/techStack';
import { ThemeProvider } from '@mui/material/styles';
import { createTheme } from '@mui/material/styles';
import { Grid, Paper, Typography } from '@mui/material';
import headshot from '../images/headshot.jpeg';
import AboutMe from '../components/aboutMe';
import Socials from '../components/socials';
const darkTheme = createTheme({ palette: { mode: 'dark' } });

export default function Bio() {
    return (
        <ThemeProvider theme={darkTheme}>
            <div style={{paddingTop: "40px"}}>
                
                <AboutMe/>
                <br></br>
                <TechStack theme={darkTheme}/>
                <br></br>
                <Socials/>
            </div>  
        </ThemeProvider>
    )
};
