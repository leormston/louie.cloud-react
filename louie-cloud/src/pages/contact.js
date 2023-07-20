import { Grid, Paper } from '@mui/material';
import * as React from 'react';
import Socials from '../components/socials';
import { ThemeProvider } from '@mui/material/styles';
import {TextField} from '@mui/material';
import Button from '@mui/material/Button';





export default function Contact(props) {
    const [email, setEmail] = React.useState("");
    const [emailInputMessage, setEmailInputMessage] = React.useState("Email Address");
    const [emailInputFormState, setEmailInputFormState] = React.useState("outlined");
    const [emailInputError, setEmailInputError] = React.useState(false);
    
    const [name, setName] = React.useState("");
    const [nameInputError, setNameInputError] = React.useState(false);
    
    const [message, setMessage] = React.useState("");
    const [messageInputError, setMessageInputError] = React.useState(false);

    const [emailSent, setEmailSent] = React.useState(false);
    const [emailError, setEmailError] = React.useState(false);

    const [loading, setLoading] = React.useState(false);

    function validateEmail(email) {
        var re = /\S+@\S+\.\S+/;
        return re.test(email);
    }

    function validateName(name) {
        if (name.length > 0) {
            return true
        }
        return false
    }
    function validateMessage(message) {
        if (message.length > 0) {
            return true
        }
        return false
    }

    async function sendEmail() {
        setLoading(true)
        if (!validateEmail(email)) {
            setEmailInputMessage("Please enter a valid email address")
            setEmailInputFormState("outlined")
            setEmailInputError(true)
            setLoading(false)
            return
        }
        setEmailInputError(false)
        if (!validateName(name)) {
            setNameInputError(true)
            setLoading(false)
            return
        }
        setNameInputError(false)

        if (!validateMessage(message)) {
            setMessageInputError(true)
            setLoading(false)
            return
        }
        setMessageInputError(false)

        await fetch("https://gouvl7urne.execute-api.eu-west-1.amazonaws.com/email-me", {
            method: "POST",
            body: JSON.stringify({
                sender_email: email,
                sender_name: name,
                message: message
            }),
            mode: 'cors'
        }).then((response) => {
            console.log(response)
            if (response.status === 200) {
                setEmailSent(true)
            } else {
                setEmailError(true)
            }
            setLoading(false)
        })
    }

    return (
        <ThemeProvider theme={props.theme}>
             <h1>Contact Me</h1>
            
            <Grid container spacing={2}>

                <Grid item xs={12} sm={6}>
                    <Paper elevation={3} sx={{ p: 2, margin: 'auto',  flexGrow: 1 }}>
                        <p>Feel free to contact me at: <strong>l.e.ormston@gmail.com</strong></p>
                    </Paper>
                    <br/>
                    <Paper elevation={3} sx={{ p: 2, margin: 'auto',  flexGrow: 1 }} className={loading ? "loading": "normal"}>
                        {emailSent &&
                        <div>
                        <p>Message sent successfully!</p>
                        <p>Thanks for reaching out! I'll get back to you as soon as I can.</p>
                        <p>Have a great day!</p>
                        <Paper elevation={3} sx={{ p: 2, margin: 'auto',  flexGrow: 1, textAlign: "left" }}>
                            <small>what you sent:</small>
                            <p><small>email: {email}</small></p>
                            <p><small>name: {name}</small></p>
                            <p><small>message: {message}</small></p>
                        </Paper>
                        </div>
                        }
                        {emailError &&
                        <div>
                        <p>This is embarrassing</p>
                        <hr/>
                        <p>Message failed to send. Please try again later.</p>
                        <p>Sorry for the inconvenience!</p>
                        </div>
                        }
                        {!emailSent && !emailError &&
                        <div>
                        <p>Too Lazy? Send me a message here:</p>

                        {emailInputError ?
                        <TextField error id="sender_email" type={'email'} label={emailInputMessage} variant={emailInputFormState} 
                        onChange={e => setEmail(e.target.value)} sx={{width: "80%", paddingBottom: "20px"}} />
                        :
                        <TextField id="sender_email" type={'email'} label={emailInputMessage} variant={emailInputFormState} 
                        onChange={e => setEmail(e.target.value)} sx={{width: "80%", paddingBottom: "20px"}} />
                        }
                        
                        {nameInputError ?
                        <TextField error id="sender_name" label="Name must have at least 1 charac" variant="outlined"  onChange={e => setName(e.target.value)} sx={{width: "80%", paddingBottom: "20px"}}/>
                        :
                        <TextField  id="sender_name" label="Your Name" variant="outlined"  onChange={e => setName(e.target.value)} sx={{width: "80%", paddingBottom: "20px"}}/>
                        }

                        {messageInputError ?
                        <TextField error id="message" label="Message must have at least 1 character" variant="outlined" onChange={e => setMessage(e.target.value)} sx={{width: "80%"}} rows={5} multiline/>
                        :
                        <TextField id="message" label="Message" variant="outlined" onChange={e => setMessage(e.target.value)} sx={{width: "80%"}} rows={5} multiline/>
                        }
                        <Button variant="contained" onClick={() => sendEmail()} sx={{width: "80%", marginTop: "20px"}}>Send Message</Button>
                        </div>
                        }
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
