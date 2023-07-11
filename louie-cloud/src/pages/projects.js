import * as React from 'react';
import { Grid } from '@mui/material';
import ProjectCard from '../components/projectCard';

export default function Projects(props) {
    return (
        <div>
           <h2>Projects</h2>
           <p>Here are some of my projects. Where applicable I have attached architecture diagrams, urls, github links and screenshots. Enjoy 😄</p>
           <Grid container spacing={3} style={{paddingTop: "40px"}}>
                <Grid item xs={12} md={6} lg={4}>
                    <ProjectCard 
                    theme={props.theme} 
                    projectTitle={"Project Title"} 
                    description={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."}
                    imgUrls={["https://madewithdemo.com/wp-content/uploads/2021/10/d588abeef753fe62f5c1971949368f2a.png",
                    "https://madewithdemo.com/wp-content/uploads/2021/10/d588abeef753fe62f5c1971949368f2a.png",
                    "https://madewithdemo.com/wp-content/uploads/2021/10/d588abeef753fe62f5c1971949368f2a.png"]} 
                    gitUrl={"www.github.com"} 
                    projectUrl={"www.github.com"} 
                    architectureDiagramUrl={"www.github.com"}/>
                </Grid>
                <Grid item xs={12} md={6} lg={4}>
                    <ProjectCard 
                    theme={props.theme} 
                    projectTitle={"Project Title"} 
                    description={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."}
                    imgUrls={["https://madewithdemo.com/wp-content/uploads/2021/10/d588abeef753fe62f5c1971949368f2a.png",
                    "https://madewithdemo.com/wp-content/uploads/2021/10/d588abeef753fe62f5c1971949368f2a.png",
                    "https://madewithdemo.com/wp-content/uploads/2021/10/d588abeef753fe62f5c1971949368f2a.png"]} 
                    gitUrl={"www.github.com"} 
                    projectUrl={"www.github.com"} 
                    architectureDiagramUrl={"www.github.com"}/>
                </Grid>
                <Grid item xs={12} md={6} lg={4}>
                    <ProjectCard 
                    theme={props.theme} 
                    projectTitle={"Project Title"} 
                    description={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."}
                    imgUrls={["https://madewithdemo.com/wp-content/uploads/2021/10/d588abeef753fe62f5c1971949368f2a.png",
                    "https://madewithdemo.com/wp-content/uploads/2021/10/d588abeef753fe62f5c1971949368f2a.png",
                    "https://madewithdemo.com/wp-content/uploads/2021/10/d588abeef753fe62f5c1971949368f2a.png"]} 
                    gitUrl={"www.github.com"} 
                    projectUrl={"www.github.com"} 
                    architectureDiagramUrl={"www.github.com"}/>
                </Grid>
                <Grid item xs={12} md={6} lg={4}>
                    <ProjectCard 
                    theme={props.theme} 
                    projectTitle={"Project Title"} 
                    description={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."}
                    imgUrls={["https://madewithdemo.com/wp-content/uploads/2021/10/d588abeef753fe62f5c1971949368f2a.png",
                    "https://madewithdemo.com/wp-content/uploads/2021/10/d588abeef753fe62f5c1971949368f2a.png",
                    "https://madewithdemo.com/wp-content/uploads/2021/10/d588abeef753fe62f5c1971949368f2a.png"]} 
                    gitUrl={"www.github.com"} 
                    projectUrl={"www.github.com"} 
                    architectureDiagramUrl={"www.github.com"}/>
                </Grid>
                <Grid item xs={12} md={6} lg={4}>
                    <ProjectCard 
                    theme={props.theme} 
                    projectTitle={"Project Title"} 
                    />
                </Grid>
            </Grid>
        </div>  
    )
};
