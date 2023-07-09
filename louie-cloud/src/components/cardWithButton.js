import * as React from 'react';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';


export default function CardWithButtons(props) {
    
    return (
        <Paper elevation={3} sx={{textAlign: 'center', color: "white", padding: "15px",  minHeight: {lg: "340px", md: "220px", xs: "180px"}, display: "flex", flexDirection: "column"}}>
            <h3>{props.title}</h3>
            <div style={{textAlign: "left"}}>
                {props.description.map((item, index) => {
                    return <p key={index}>{item}</p>
                })}
            </div>
            {props.buttonText &&<div style={{flexGrow: 1, flex: 1, alignSelf: "flex-end", display: "flex"}}>
                <Button variant="contained" sx={{bgcolor: "#6a75dc", alignSelf: "flex-end"}}>{props.buttonText}</Button>
            </div>}

        </Paper>
    )
};
