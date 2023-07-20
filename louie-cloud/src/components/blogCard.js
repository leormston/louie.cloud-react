import * as React from 'react';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import { useNavigate } from "react-router-dom";

export default function BlogCard(props) {
    const navigate = useNavigate();
    return (
        <Paper elevation={3} style={{padding: "20px",  minHeight: "300px"}}>
                <h3>{props.title}</h3>
                <Swiper
                    spaceBetween={50}
                    slidesPerView={1}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                    >
                    {props.imgUrls && props.imgUrls.map((url) => <SwiperSlide><img src={url} alt="screenshot" height="200px"></img></SwiperSlide>)}
                </Swiper>
                
                <p>{props.description}</p>
                <Button variant="contained" onClick={ () => navigate("/blog/" + props.blogId)}>Read More</Button>

            </Paper>
    )
};
