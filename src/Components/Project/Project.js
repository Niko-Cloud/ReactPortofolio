import React from 'react'
import "./Project.css"
import ProjectList from './ProjectList'
import Zoom from 'react-reveal/Zoom';


const Project = () => {
    const data = [
        {
            name: "MERN Stack Job Portal",
            Desc: "Hey guys, did you know that in terms of male human and female Pokémon breeding, Vaporeon is the most compatible Pokémon for humans?",
            ProjectLink: "https://open.spotify.com/playlist/47F6C8psMYNiAoY96qFv4r?si=626574a6850d4178",
            techused: [
                {
                    techname: "NodeJS"
                },
                {
                    techname: "ReactJS"
                },
                {
                    techname: "Angular"
                },
                {
                    techname: "NextJS"
                }
            ]
        },
        {
            name: "MERN Stack Management Portal",
            Desc: "Hey guys, did you know that in terms of male human and female Pokémon breeding, Vaporeon is the most compatible Pokémon for humans?",
            ProjectLink: "https://open.spotify.com/playlist/47F6C8psMYNiAoY96qFv4r?si=626574a6850d4178",
            techused: [
                {
                    techname: "AngularJS"
                },
                {
                    techname: "TypeScript"
                },
                {
                    techname: "Angular"
                },
                {
                    techname: "MongooDB"
                },
                {
                    techname: "NextJS"
                }
            ]
        },
        {
            name: "MERN Video Streaming",
            Desc: "Hey guys, did you know that in terms of male human and female Pokémon breeding, Vaporeon is the most compatible Pokémon for humans?",
            ProjectLink: "https://open.spotify.com/playlist/47F6C8psMYNiAoY96qFv4r?si=626574a6850d4178",
            techused: [
                {
                    techname: "AngularJS"
                },
                {
                    techname: "Javascript"
                },
                {
                    techname: "HTML"
                },
                {
                    techname: "NextJS"
                }
            ]
        },
        {
            name: "MERN E-Commerce",
            Desc: "Hey guys, did you know that in terms of male human and female Pokémon breeding, Vaporeon is the most compatible Pokémon for humans?",
            ProjectLink: "https://open.spotify.com/playlist/47F6C8psMYNiAoY96qFv4r?si=626574a6850d4178",
            techused: [
                {
                    techname: "React"
                },
                {
                    techname: "TypeScript"
                },
                {
                    techname: "Redux"
                },
                {
                    techname: "NextJS"
                }
            ]
        },
        {
            name: "MERN Real Estate",
            Desc: "Hey guys, did you know that in terms of male human and female Pokémon breeding, Vaporeon is the most compatible Pokémon for humans?",
            ProjectLink: "https://open.spotify.com/playlist/47F6C8psMYNiAoY96qFv4r?si=626574a6850d4178",
            techused: [
                {
                    techname: "React"
                },
                {
                    techname: "TMongoDB"
                },
                {
                    techname: "TailwindCSS"
                },
                {
                    techname: "GraphQL"
                }
            ]
        },
        {
            name: "Django E-Commerce",
            Desc: "Hey guys, did you know that in terms of male human and female Pokémon breeding, Vaporeon is the most compatible Pokémon for humans?",
            ProjectLink: "https://open.spotify.com/playlist/47F6C8psMYNiAoY96qFv4r?si=626574a6850d4178",
            techused: [
                {
                    techname: "React Native"
                },
                {
                    techname: "TypeScript"
                },
                {
                    techname: "Django"
                },
                {
                    techname: "Python"
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