import React, {useState} from 'react'
import "./Project.css"
import {FcExpand, FcCollapse} from "react-icons/fc";


const ProjectList = ({name, Desc, ProjectLink, techused}) => {

    const [ProjectExpand, setProjectExpand] = useState(false);
    const LoadDescription = () => {
        setProjectExpand(!ProjectExpand)
    }

    const colors =[
        "#a65288",
        "#cb4d54",
        "#cc5c42",
        // "#1df4e8",
        // "#a30113",
        // "#2edead",
        // "#ef4064",
        "#3895b1",
        "#e04def",
        "#d2831b",
        "#a30113",
        "#eaae80",
        "#426bc4",
        "#d313fc",
        "#bce06b",
        "#8f15f0",
        "#39e1b6",
        "#6e58e6",
        "#14facd",
        "#917e9d",
    ]

    return (
        <div onClick={LoadDescription}
             className={ProjectExpand ? "project-list"  : "project-list-expand"}
             onMouseEnter={()=>setProjectExpand(true)}
             // onMouseLeave={()=>setProjectExpand(false)}
        >
            <div className="title-and-collapse-button">
                <h5>{name}</h5>
                <p>
                    {ProjectExpand ? <FcCollapse size={20}/> : <FcExpand size={20}/>}
                </p>
            </div>
            <div className="description">
                {ProjectExpand ? <p>{Desc}</p> : <p>{Desc.substring(0, 10)} ... </p>}
            </div>
            <div className="row">
                {techused && techused.map((tech, index) => (
                    <div className="col-xl-4 col-lg-3 col-md-6 col-sm-12" key={index}>
                        <div className="tech-used">
                            <p  style={{backgroundColor:colors[index]}}>{tech.techname}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="demo-button">
                <a href={ProjectLink}>Live Demo</a>
            </div>
        </div>
    )
}

export default ProjectList