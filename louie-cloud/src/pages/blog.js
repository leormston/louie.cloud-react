import * as React from 'react';
import BlogCard from '../components/blogCard';
import { ThemeProvider } from '@mui/material';
import Grid from '@mui/material/Grid';
export default function Blog(props) {

    return (
        <ThemeProvider theme={props.theme}>
            <div>
            <h2>My Blog</h2>
            <br/>
            <br/>
            <br/>
            <p>An update is coming to the blogs page. Sorry for the inconvenience.</p>
            {/* <p>A bunch of stuff I have written in the past. Feel free to read, reference or share.</p>
            <Grid container spacing={3} style={{paddingTop: "40px"}}>
                <Grid item xs={12} md={6} lg={4}>
                    <BlogCard title="Article Title" 
                    description="Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum"  
                    blogId="1"
                    imgUrls={["https://static.vecteezy.com/system/resources/previews/006/828/456/original/bright-smiley-face-emoji-expression-free-vector.jpg",
                    "https://madewithdemo.com/wp-content/uploads/2021/10/d588abeef753fe62f5c1971949368f2a.png",
                    "https://madewithdemo.com/wp-content/uploads/2021/10/d588abeef753fe62f5c1971949368f2a.png"]} />
                </Grid>
                <Grid item xs={12} md={6} lg={4}>
                    <BlogCard title="Article Title" 
                    description="Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum" 
                    blogId="2"
                    imgUrls={["https://madewithdemo.com/wp-content/uploads/2021/10/d588abeef753fe62f5c1971949368f2a.png",
                    "https://madewithdemo.com/wp-content/uploads/2021/10/d588abeef753fe62f5c1971949368f2a.png",
                    "https://madewithdemo.com/wp-content/uploads/2021/10/d588abeef753fe62f5c1971949368f2a.png"]} />
                </Grid>
                <Grid item xs={12} md={6} lg={4}>
                    <BlogCard title="Article Title" 
                    description="Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum" 
                    blogId="3"
                    imgUrls={["https://madewithdemo.com/wp-content/uploads/2021/10/d588abeef753fe62f5c1971949368f2a.png",
                    "https://madewithdemo.com/wp-content/uploads/2021/10/d588abeef753fe62f5c1971949368f2a.png",
                    "https://madewithdemo.com/wp-content/uploads/2021/10/d588abeef753fe62f5c1971949368f2a.png"]} />
                </Grid>
                <Grid item xs={12} md={6} lg={4}>
                    <BlogCard title="Article Title" 
                    description="Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum" 
                    blogId="4"
                    imgUrls={["https://madewithdemo.com/wp-content/uploads/2021/10/d588abeef753fe62f5c1971949368f2a.png",
                    "https://madewithdemo.com/wp-content/uploads/2021/10/d588abeef753fe62f5c1971949368f2a.png",
                    "https://madewithdemo.com/wp-content/uploads/2021/10/d588abeef753fe62f5c1971949368f2a.png"]} />
                </Grid>
                <Grid item xs={12} md={6} lg={4}>
                    <BlogCard title="Article Title" 
                    description="Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum" 
                    blogId="5"
                    imgUrls={["https://madewithdemo.com/wp-content/uploads/2021/10/d588abeef753fe62f5c1971949368f2a.png",
                    "https://madewithdemo.com/wp-content/uploads/2021/10/d588abeef753fe62f5c1971949368f2a.png",
                    "https://madewithdemo.com/wp-content/uploads/2021/10/d588abeef753fe62f5c1971949368f2a.png"]} />
                </Grid>
                <Grid item xs={12} md={6} lg={4}>
                    <BlogCard title="Article Title" 
                    description="Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum" 
                    blogId="6"
                    imgUrls={["https://madewithdemo.com/wp-content/uploads/2021/10/d588abeef753fe62f5c1971949368f2a.png",
                    "https://madewithdemo.com/wp-content/uploads/2021/10/d588abeef753fe62f5c1971949368f2a.png",
                    "https://madewithdemo.com/wp-content/uploads/2021/10/d588abeef753fe62f5c1971949368f2a.png"]} />
                </Grid>
            </Grid> */}
                
            </div>  
        </ThemeProvider>
    )
};
