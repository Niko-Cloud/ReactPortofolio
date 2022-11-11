import React from 'react'
import "./Project.css"
import ProjectList from './ProjectList'
import Zoom from 'react-reveal/Zoom';


const Project = () => {
    const data = [
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