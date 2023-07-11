import { Grid, Paper } from '@mui/material';
import * as React from 'react';
import Socials from '../components/socials';
import { ThemeProvider } from '@mui/material/styles';
import {TextField} from '@mui/material';
import Button from '@mui/material/Button';
export default function Contact(props) {
    return (
        <ThemeProvider theme={props.theme}>
             <h1>Contact</h1>
            
            <Grid container spacing={2}>

                <Grid item xs={12} sm={6}>
                    <Paper elevation={3} sx={{ p: 2, margin: 'auto',  flexGrow: 1 }}>
                        <p>Feel free to contact me at: <strong>l.e.ormston@gmail.com</strong></p>
                    </Paper>
                    <br/>
                    <Paper elevation={3} sx={{ p: 2, margin: 'auto',  flexGrow: 1 }}>
                        <p>Too Lazy? Send me a message here:</p>
                        <TextField id="outlined-basic" label="Your Email" variant="outlined"  sx={{width: "80%", paddingBottom: "20px"}}/>
                        <TextField id="outlined-basic" label="Message" variant="outlined" sx={{width: "80%"}} rows={5} multiline/>
                        <Button variant="contained" sx={{width: "80%", marginTop: "20px"}}>Send Message</Button>
                    </Paper>
                    <br/>
                    <Paper elevation={3} sx={{ p: 2, margin: 'auto',  flexGrow: 1 }}>
                        <p>Currently based in <strong>London</strong>. Willing to hang out in person if possible 😄</p>
                    </Paper>
                      

                </Grid>
                <Grid item xs={12} sm={6}>
                    <Socials/>
                    <br/>
                    <Paper elevation={3} sx={{ p: 2, margin: 'auto',  flexGrow: 1 }}>
                        <p>I would like to say a HUGE thank you for taking the time to visit my personal site.</p>
                        <p>It means a lot to me that you have taken the time to look at my work.</p>
                        <p>Collaboration is what will power the future of computing</p>
                        <p>So please, if you have any ideas, questions or just want to say hi, please do not hesitate to contact me.</p>
                        <p>Lets achieve great things together! &nbsp;🫡</p>
                        
                    </Paper>
                </Grid>
            
            </Grid>

            <br/><br/>
            
            <p></p>

        </ThemeProvider>
    )
};
