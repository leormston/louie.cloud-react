import * as React from 'react';
import { Grid } from '@mui/material';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import hackerrank from '../images/icons/hackerrank.png';
import leetcode from '../images/icons/leetcode.png';
import cv from '../pages/cv.pdf';
export default function Socials() {
    
    return (
        <Grid container spacing={2}>
           
            <Grid item xs={12} sm={10}>
                <Paper elevation={3} sx={{ p: 2, margin: 'auto',  flexGrow: 1 }}>
                    <h2>
                        Socials
                    </h2>
                    <Grid container spacing={2}>
                        <Grid item xs={4} sm={2}  >
                            <div className="hover" onClick={() => window.location.replace("https://www.linkedin.com/in/louie-ormston-48810a150/")}>
                                <img src="https://img.icons8.com/color/48/000000/linkedin.png"/>
                                <p>LinkedIn</p>
                            </div>
                            
                        </Grid>
                        <Grid item xs={4} sm={2}>
                            <div className="hover" onClick={() => window.location.replace("https://github.com/leormston")}>
                                <img src="https://img.icons8.com/color/48/000000/github--v1.png"/>
                                <p>GitHub</p>
                            </div>
                        </Grid>
                        <Grid item xs={4} sm={2}>
                            <div className="hover" onClick={() => window.location.replace("https://twitter.com/louie_ormston")}>
                            <img src="https://img.icons8.com/color/48/000000/twitter--v1.png"/>
                            <p>Twitter</p>
                            </div>
                        </Grid>
                        <Grid item xs={4} sm={2} onClick={() => window.location.replace("https://www.instagram.com/louie_ormston/")}>
                            <div className="hover">
                            <img src="https://img.icons8.com/color/48/000000/instagram-new--v1.png"/>
                            <p>Instagram</p>
                            </div>
                        </Grid>
                        <Grid item xs={4} sm={2}>
                            <div className="hover" onClick={() => window.location.replace("https://leetcode.com/louieormston/")}>
                                <img src={leetcode} height="48px"/>
                                <p>LeetCode</p>
                            </div>
                        </Grid>
                        <Grid item xs={4} sm={2}  >
                            <div className="hover"  onClick={() => window.location.replace("https://www.hackerrank.com/l_e_ormston?hr_r=1")}>
                            <img src={hackerrank} height="48px"/>
                            <p>HackerRank</p>
                            </div>
                        </Grid>
                    </Grid>
                    
                </Paper>
            </Grid>
            <Grid item xs={12} sm={2}>
                <Paper elevation={3} sx={{ p: 1, margin: 'auto',  flexGrow: 1 }}>
                    <h3>Head Hunting?</h3>
                    <p>Download my CV</p>
                    <Button href={cv} variant="contained" sx={{bgcolor: "#6a75dc"}}>Download</Button>
                </Paper>
            </Grid>
        </Grid>
    )
};

