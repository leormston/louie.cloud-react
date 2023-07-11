import * as React from 'react';
import { Grid } from '@mui/material';
import Paper from '@mui/material/Paper';
import headshot from '../images/headshot.jpeg';

export default function AboutMe() {
    
    return (
        <Grid container spacing={2}>
            <Grid item xs={12} sm={2}>
                <Paper elevation={3} sx={{ p: 1, margin: 'auto',  flexGrow: 1 }}>
                    <img src={headshot} width="100%"></img>
                </Paper>
            </Grid>
            <Grid item xs={12} sm={10}>
                <Paper elevation={3} sx={{ p: 2, margin: 'auto',  flexGrow: 1 }}>
                    <h2>
                        About Me
                    </h2>
                    <p>
                        I am a full stack developer based in London with a passion for learning and creating. I have a background in
                        Computer Science and have worked in the Tech industry for the past 3 years. I graduated from Queen Mary University of London with a BSc in Computer Science. I am passionate about Web Development,
                        Cloud Computing and DevOps. I am currently working as a Cloud Engineer at a Vodafone UK.
                    </p>
                    <p>
                        In my spare time I enjoy learning new technologies and building projects. 
                    </p>
                    <p>I'm an avid fan of reading &nbsp;📚&nbsp; & running &nbsp;🏃‍♂️&nbsp;. <small>(not at the same time)</small></p>
                    <p>Currently learning the ins and outs of photography &nbsp; 📸</p>
                    
                </Paper>
            </Grid>
        </Grid>
    )
};

