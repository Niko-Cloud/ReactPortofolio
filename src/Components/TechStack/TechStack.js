import React,{useState} from 'react'
import "./TechStack.css"
import Fade from 'react-reveal/Fade';
import Bounce from 'react-reveal/Bounce';

const TechStack = () => {
    const data =[
        {name: "Full Stack Developer"},{name: "Front-End Developer"},{name: "Back-End Developer"},
        {name: "ReactJS"},{name: "NodeJS"},{name: "Angular"},
        {name: "Python"},{name: "Django"},{name: "VueJS"},
        {name: "Javascript"},{name: "Laravel"},{name: "Flask"},
        {name: "NextJS"},{name: "Redux"},
    ]
    const colors =[
        "#a65288",
        "#cb4d54",
        "#cc5c42",
        "#1df4e8",
        "#a30113",
        "#2edead",
        "#ef4064",
        "#3895b1",
        "#e04def",
        "#d2831b",
        "#a30113",
        "#eaae80",
        "#426bc4",
        "#d313fc"
        // "#bce06b",
        // "#8f15f0",
        // "#39e1b6",
        // "#6e58e6",
        // "#14facd",
        // "#917e9d",
    ]
    const [ShowMore, setShowMore] = useState(6);
    const LoadMore=()=>{
        setShowMore((prev)=>prev+3)
    }

  return (
    <div>
        <div className="section-title" id="techstack">
            <h5>Tech Stack</h5>
            <span className="line"></span>
        </div>
            <div className="row">
                {data.slice(0,ShowMore).map((item,index)=>(
                    <Fade>
                        <div className='col-xl-4 col-lg-4 col-md-6 col-sm-12' key={index}>
                            <div className={index===0 ? "text-content-marked text-content" : "text-content"}>
                                <div>
                                <span className="text-number" style={{backgroundColor:colors[index]}}>
                                    {index+1}
                                </span>
                                </div>
                                <p>{item.name}</p>
                            </div>
                        </div>
                    </Fade>
                ))}
            </div>

        {ShowMore >= data.length ? null:(
            <Bounce>
                <span className="load-more-tech-stack" onClick={LoadMore}>
                    Load More
                </span>
            </Bounce>
        )}
    </div>
  )
}

export default TechStack