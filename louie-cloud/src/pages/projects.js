import * as React from 'react';
// import { Grid } from '@mui/material';
// import ProjectCard from '../components/projectCard';
import {CircularProgress} from '@mui/material';
export default function Projects(props) {
    // const [projects, setProjects] = React.useState([])
    const [loading, setLoading] = React.useState(true)

    React.useEffect(() => {
        fetch("https://gouvl7urne.execute-api.eu-west-1.amazonaws.com/api/projects")
        .then(res => res.json())
        .then(data => {
            // setProjects(data)
            setLoading(false)
        })
    }, [])

    return (
        <div>
           <h2>Projects</h2>
           <p>Here are some of my projects. Where applicable I have attached architecture diagrams, urls, github links and screenshots. Enjoy 😄</p>
           {loading ? <CircularProgress color="secondary"/> : 
           <div>
           {/* <Grid container spacing={3} style={{paddingTop: "40px"}}>
                {projects.map((project, index) => {
                    return (
                        <Grid item xs={12} md={6} lg={4} key={index}>
                            <ProjectCard
                            theme={props.theme}
                            projectTitle={project.projectTitle}
                            description={project.description}
                            imgUrls={project.imgUrls}
                            architectureDiagramUrl={project.architectureDiagram}
                            gitUrl={project.gitUrl}
                            projectUrl={project.projectUrl}
                            />
                        </Grid>
                    )
                })}
            </Grid> */}
            <br/>
            <br/>
            <br/>
            <h4>Sorry for the inconvenience. Updated project page coming soon :)</h4>
            </div>
            }
        </div>  
    )
};
