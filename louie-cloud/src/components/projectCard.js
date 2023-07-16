import * as React from 'react';
import { Paper } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';

import link from '../images/icons/link.png';
import house from '../images/icons/house.png';
export default function ProjectCard(props) {
    
    return (
        <ThemeProvider theme={props.theme}>
            
            <Paper elevation={3} style={{padding: "20px",  minHeight: "700px"}}>
                <h3>{props.projectTitle}</h3>
                <Swiper
                    spaceBetween={50}
                    slidesPerView={1}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                    >
                    {props.imgUrls && props.imgUrls.map((url) => <SwiperSlide><img src={url} alt="screenshot" height="200px"></img></SwiperSlide>)}
                </Swiper>
                
                <p>{props.description}</p>
                {props.gitUrl &&
                <div className="hover linkIcon" onClick={() => window.location.replace(props.gitUrl)} >
                    <img src="https://img.icons8.com/color/48/000000/github--v1.png"  alt="github" style={{alignSelf: "flex-end"}}/>
                    <p style={{display: "inline-block", paddingLeft: "10px"}}>GitHub Project</p>
                </div>
                }
                {props.projectUrl &&
                <div className="hover linkIcon" onClick={() => window.location.replace(props.projectUrl)} >
                    <img src={link}  alt="link" height="48px" style={{alignSelf: "flex-end"}}/>
                    <p style={{display: "inline-block", paddingLeft: "10px"}}>Project Url</p>
                </div>
                }
                {props.architectureDiagramUrl &&
                <div className="hover linkIcon" onClick={() => window.location.replace(props.projectUrl)} >
                    <img src={house}  alt="link" height="48px" style={{alignSelf: "flex-end"}}/>
                    <p style={{display: "inline-block", paddingLeft: "10px"}}>Architecture Diagram</p>
                </div>
                }
   

            </Paper>

        </ThemeProvider>
    )
};
