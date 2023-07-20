import * as React from 'react';
import { Grid } from '@mui/material';
import CardWithButtons from './cardWithButton';
import { ThemeProvider } from '@mui/material';
//images
import ado from '../images/icons/ado.png';
import aws from '../images/icons/aws.png';
import python from '../images/icons/python.png';
import java from '../images/icons/java.png';
import react from '../images/icons/react.png';
import node from '../images/icons/node.png';
import javascript from '../images/icons/js.png';
import sql from '../images/icons/sql.svg';
import firebase from '../images/icons/firebase.png';
import github from '../images/icons/github.png';
import vscode from '../images/icons/vscode.png';
import linux from '../images/icons/linux.png';
import docker from '../images/icons/docker.webp';
import terraform from '../images/icons/terraform.png';
import typescript from '../images/icons/typescript.png';
import html from '../images/icons/html.png';

export default function TechStack(props) {

    return (
            
            <ThemeProvider theme={props.theme}>
                <Grid container spacing={3}>
                    <Grid item md={6}>
                        <CardWithButtons title={"My Tech Stack"} 
                        description={[ "I'm, always up to using the latest and best technology wherever possible. In the past I have worked with Python, JavaScript, Java and their respective frameworks and popular packages. " , 
                        " I am particularly interest in React due to speed and ease of use. The two cloud providers I use the most are Google and AWS of which I prefer to use IAC tools such as Terraform and CloudFormation." ,
                        "In the graphic I have listed some of the technologies and services I work with on a daily basis"]} theme={props.theme} buttonText={"Read More"} buttonHref={"/bio"}/>

                    </Grid>
                    <Grid item md={6}>
                        <Grid container spacing={1} sx={{margin: "auto", minheight: {lg: "340px", md: "220px", xs: "180px"}, paddingTop: "20px", alignItems: "center", display: "flex", flexGrow: 1, verticalAlign: "middle"}}>
                            <Grid item xs={3}>
                                <img src={ado} style={{margin: "auto", maxHeight: "70px", maxWidth: "70px", opacity: 0.7}} width="80%" alt="logo" m/>
                            </Grid>
                            <Grid item xs={3}>
                                <img src={aws} style={{margin: "auto", maxHeight: "70px", maxWidth: "70px", opacity: 0.7}} width="80%" alt="logo" m/>
                            </Grid>
                            <Grid item xs={3}>
                                <img src={python} style={{margin: "auto", maxHeight: "70px", maxWidth: "70px", opacity: 0.7}} width="80%" alt="logo" m/>
                            </Grid>
                            <Grid item xs={3}>
                                <img src={java} style={{margin: "auto", maxHeight: "70px", maxWidth: "70px", opacity: 0.7}} width="80%" alt="logo" m/>
                            </Grid>
                            <Grid item xs={3}>
                                <img src={react} style={{margin: "auto", maxHeight: "70px", maxWidth: "70px", opacity: 0.7}} width="80%" alt="logo" m/>
                            </Grid>
                            <Grid item xs={3}>
                                <img src={node} style={{margin: "auto", maxHeight: "70px", maxWidth: "70px", opacity: 0.7}} width="80%" alt="logo" m/>
                            </Grid>
                            <Grid item xs={3}>
                                <img src={javascript} style={{margin: "auto", maxHeight: "70px", maxWidth: "70px", opacity: 0.7}} width="80%" alt="logo" m/>
                            </Grid>
                            <Grid item xs={3}>
                                <img src={sql} style={{margin: "auto", maxHeight: "70px", maxWidth: "70px", opacity: 0.7}} width="80%" alt="logo" m/>
                            </Grid>
                            <Grid item xs={3}>
                                <img src={firebase} style={{margin: "auto", maxHeight: "70px", maxWidth: "70px", opacity: 0.7}} width="80%" alt="logo" m/>
                            </Grid>
                            <Grid item xs={3}>
                                <img src={github} style={{margin: "auto", maxHeight: "70px", maxWidth: "70px", opacity: 0.7}} width="80%" alt="logo" m/>
                            </Grid>
                            <Grid item xs={3}>
                                <img src={vscode} style={{margin: "auto", maxHeight: "70px", maxWidth: "70px", opacity: 0.7}} width="80%" alt="logo" m/>
                            </Grid>
                            <Grid item xs={3}>
                                <img src={linux} style={{margin: "auto", maxHeight: "70px", maxWidth: "70px", opacity: 0.7}} width="80%" alt="logo" m/>
                            </Grid>
                            <Grid item xs={3}>
                                <img src={docker} style={{margin: "auto", maxHeight: "70px", maxWidth: "70px", opacity: 0.7}} width="80%" alt="logo" m/>
                            </Grid>
                            <Grid item xs={3}>
                                <img src={terraform} style={{margin: "auto", maxHeight: "70px", maxWidth: "70px", opacity: 0.7}} width="80%" alt="logo" m/>
                            </Grid>
                            <Grid item xs={3}>
                                <img src={typescript} style={{margin: "auto", maxHeight: "70px", maxWidth: "70px", opacity: 0.7}} width="80%" alt="logo" m/>
                            </Grid>
                            <Grid item xs={3}>
                                <img src={html} style={{margin: "auto", maxHeight: "70px", maxWidth: "70px", opacity: 0.7}} width="80%" alt="logo" m/>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </ThemeProvider>
    )
};
