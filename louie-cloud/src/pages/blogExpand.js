import * as React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { useParams } from "react-router-dom";
import { Box } from '@mui/system';
import {Swiper, SwiperSlide} from 'swiper/react';
import ReactMarkdown  from 'react-markdown';
import 'swiper/css';

let imgUrls = [
    "https://i.imgur.com/1Z9Q4ZS.png",
    "https://i.imgur.com/1Z9Q4ZS.png",
    "https://i.imgur.com/1Z9Q4ZS.png",
]

let markdown = '# This is a header\n\nAnd this is a paragraph\n```js\nconsole.log("Hello World")```\n\n'

export default function BlogExpand(props) {

    let { blogId } = useParams();
    return (
        <ThemeProvider theme={props.theme}>
            <Box style={{textAlign: "left", marginLeft: "auto", marginRight: "auto"}} sx={{width: {xs: "90%", sm: "80%", md: "50%"}}}>
                <h2>Blog Title</h2>
                <Swiper 
                    spaceBetween={50}
                    slidesPerView={1}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                    >
                    {imgUrls.map((url) => <SwiperSlide><img src={url} alt="screenshot" width='100%'></img></SwiperSlide>)}
                </Swiper>
                
                <p>{blogId}</p>
                <p><small>Blog Date, Blog Author</small></p>
                <p>Blog Content</p>
                <div className="blogMarkdown">
                <ReactMarkdown children={markdown}/>
                </div>
            </Box>
            
   
        </ThemeProvider>
    )
};
