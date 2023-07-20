import * as React from 'react';
import LogoBanner from '../components/logoBanner';
import HomeCards from '../components/homeCards';
import TechStack from '../components/techStack';


export default function Home(props) {
    return (
        <div >
            <LogoBanner theme={props.theme} cssTheme={props.cssTheme}/>
            <TechStack theme={props.theme}/>
            <HomeCards theme={props.theme}/>
            
        </div>  
    )
};
