import * as React from 'react';
import TechStack from '../components/techStack';
import { createTheme } from '@mui/material/styles';

const darkTheme = createTheme({ palette: { mode: 'dark' } });

export default function Bio() {
    return (
        <div>
           <p>Bio</p>
           <TechStack theme={darkTheme}/>
        </div>  
    )
};
