import * as React from 'react';
import TechStack from '../components/techStack';
import { ThemeProvider } from '@mui/material/styles';
import AboutMe from '../components/aboutMe';
import Socials from '../components/socials';

export default function Bio(props) {
    return (
        <ThemeProvider theme={props.theme}>
            <div style={{paddingTop: "40px"}}>
                
                <AboutMe/>
                <br></br>
                <TechStack theme={props.theme}/>
                <br></br>
                <Socials/>
            </div>  
        </ThemeProvider>
    )
};
