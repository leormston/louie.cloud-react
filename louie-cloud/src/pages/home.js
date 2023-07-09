import * as React from 'react';
import LogoBanner from '../components/logoBanner';
import HomeCards from '../components/homeCards';
import TechStack from '../components/techStack';
import { createTheme } from '@mui/material/styles';
const darkTheme = createTheme({ palette: { mode: 'dark' } });

export default function Home() {
    return (
        <div >
            <LogoBanner/>
            <TechStack theme={darkTheme}/>
            <HomeCards theme={darkTheme}/>
            
        </div>  
    )
};
