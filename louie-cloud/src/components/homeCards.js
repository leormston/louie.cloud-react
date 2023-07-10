import * as React from 'react';
import { Grid } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import CardWithButtons from './cardWithButton';

//mui theme


export default function HomeCards(props) {
    
    return (
        <ThemeProvider theme={props.theme}>
        <Grid container spacing={3} style={{paddingTop: "40px"}}>
            <Grid item xs={12} md={6} lg={3}>
                <CardWithButtons title="About Me" buttonHref="/bio" description={["I'm Louie and I have been making software for over 10 years now. I'm a Computer Science graduate who has professional experience working in the tech industry."]} buttonText="Find out more" theme={props.theme}/>
            </Grid>
            <Grid item xs={12} md={6}  lg={3}>
                <CardWithButtons title="Projects" buttonHref="/projects" description={["If I ever get any free time, I'll spend some of it coding and working on personal projects. I mainly work with the Cloud, React and Python. Come and see what I have been working on!"]} buttonText="Take a look" theme={props.theme}/>  
            </Grid>    
            <Grid item xs={12} md={6} lg={3}>
                <CardWithButtons title="My Blog" buttonHref="/blog" description={["This is where I write anything tech related, ranging from step-by-step guides to thoughts on recent events in the world of programming. "]} buttonText="Get Reading" theme={props.theme}/>
            </Grid>
            <Grid item xs={12} md={6} lg={3}>
                <CardWithButtons title="Get In Touch" buttonHref="/contact" description={["I love talking to anyone who shares an interest in writing great code and solving problems. Send me a message if you're interested in working together!"]} buttonText="Take a look" theme={props.theme}/>
            </Grid>
        </Grid>
    </ThemeProvider>
    )
};
