import React from 'react'
import "./Project.css"
import ProjectList from './ProjectList'
import Zoom from 'react-reveal/Zoom';


const Project = () => {
    const data = [
        {
            name: "Clustering with Suisei",
            Desc: "Made this project by myself for my teams using flask and tailwindcss deployed in heroku" +
                "This web have functionality to cluster 2 features of Bank Authentication from UCI repository",
            ProjectLink: "https://suisei-app.herokuapp.com",
            techused: [
                {
                    techname: "TailwindCSS"
                },
                {
                    techname: "Flask"
                },
                {
                    techname: "Python"
                },
                {
                    techname: "Notebook"
                }
            ]
        },
        {
            name: "Realtor Clone",
            Desc: "Simple clone project from website realtor.com. Deployed with local build",
            ProjectLink: "https://realtor-clone-niko-cloud.vercel.app",
            techused: [
                {
                    techname: "ReactJS"
                },
                {
                    techname: "TailwindCSS"
                },
                {
                    techname: "HTML"
                },
                {
                    techname: "Firebase"
                }
            ]
        },
        {
            name: "Vidly Backend",
            Desc: "Pure NodeJs backend, without any of frontend, made from Mosh tutorial node,js" +
                "You can click the live demo button to redirect you into github repositories of this project",
            ProjectLink: "https://github.com/Niko-Cloud/Node-JS-Vidly",
            techused: [
                {
                    techname: "NodeJs"
                },
                {
                    techname: "Express"
                },
                {
                    techname: "MongoDB"
                },
                {
                    techname: "Javascript"
                }
            ]
        }
    ]
    return (
        <div>
            <div className="section-title" id="project">
                <h5>Projects</h5>
                <span className="line"></span>
            </div>

            <div className="row gx-5">
                {data.map((item, index) => (
                    <Zoom>
                        <div className="col-xl-6 col-lg-8 col-md-8 col-sm-12" key={index}>
                            <ProjectList {...item}/>
                        </div>
                    </Zoom>
                ))}
            </div>
        </div>
    )
}

export default Project