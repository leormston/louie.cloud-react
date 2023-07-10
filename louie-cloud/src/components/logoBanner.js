import * as React from 'react';
import lg_logo from '../images/lg_logo.png';
import { Grid } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
export default function LogoBanner() {
    
    return (
        <div className="center" style={{paddingBottom: "20px"}}>
            
            <Grid container spacing={3}>
                <Grid item xs={12} sm={5} md={4}  sx={{height: {sm: "400px"}, display: {sm: "flex"}, textAlign: 'center', alignItems: {sm: "center"}, verticalAlign: {sm: "middle"}}}>
                    <img src={lg_logo} style={{margin: "auto", maxHeight: "300px", maxWidth: "300px"}} width="80%" alt="logo" m/>
                </Grid>
                <Grid item xs={12} sm={7}  md={8}  sx={{height: {sm: "400px"}, display: {sm: "flex"}, alignItems: {sm: "center"}, verticalAlign: {sm: "middle"}}}>
                    <Box className="center">
                    <h2>Hi, I'm Louie</h2>
                    <p style={{ width: "100%"}}>I'm a Software Engineer based in the UK. I'm currently working as a DevOps SRE @ Vodafone UK<br/> <br/> I &nbsp; 💜 &nbsp; Solving Problems, Building Solutions &amp; Coding Cool Things &nbsp;😏</p>
                        <Button href="/bio" variant="contained" sx={{bgcolor: "#6a75dc"}}>Find Out More</Button>
                    </Box>
                    
                </Grid>
            </Grid>
        </div>
    )
};

