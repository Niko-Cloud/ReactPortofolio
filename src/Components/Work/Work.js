import React from 'react';
import "./Work.css"
import {VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import {GrWorkshop, GrStar} from "react-icons/gr";


const Work = () => {

    const data = [
        {
            companyname: "Google",
            year: "2019-Present",
            position: "Full Stack Developer",
            Desc: "Hey guys, did you know that in terms of male human and female Pokémon breeding, Vaporeon is the most compatible Pokémon for humans?",
            techskill: [
                {
                    techname: "ReactJS"
                },
                {
                    techname: "ExpressJS"
                },
                {
                    techname: "NodeJS"
                },
                {
                    techname: "Bootstrap"
                }
            ]
        },
        {
            companyname: "Facebook",
            year: "2017-2019",
            position: "Full Stack Developer",
            Desc: "Hey guys, did you know that in terms of male human and female Pokémon breeding, Vaporeon is the most compatible Pokémon for humans?",
            techskill: [
                {
                    techname: "Django"
                },
                {
                    techname: "ReactJS"
                },
                {
                    techname: "Firebase"
                },
                {
                    techname: "Bootstrap"
                }
            ]
        },
        {
            companyname: "Where Is This",
            year: "2014-2017",
            position: "Full Stack Developer",
            Desc: "Hey guys, did you know that in terms of male human and female Pokémon breeding, Vaporeon is the most compatible Pokémon for humans?",
            techskill: [
                {
                    techname: "ReactJS"
                },
                {
                    techname: "ExpressJS"
                },
                {
                    techname: "NodeJS"
                },
                {
                    techname: "Bootstrap"
                }
            ]
        },
        {
            companyname: "Microsoft",
            year: "2011-2014",
            position: "Any Developer",
            Desc: "Hey guys, did you know that in terms of male human and female Pokémon breeding, Vaporeon is the most compatible Pokémon for humans?",
            techskill: [
                {
                    techname: "Java"
                },
                {
                    techname: "PHP"
                },
                {
                    techname: "Mango"
                },
                {
                    techname: "Bootstrap"
                }
            ]
        }
    ]

    const colors = [
        "#a65288",
        "#cb4d54",
        "#cc5c42",
        "#1df4e8",
    ]

    return (
        <div className="container work-exp-section" id="work">
            <div className="section-title">
                <h5>Work Experience</h5>
                <span className="line"></span>
            </div>

            <VerticalTimeline lineColor={ "#74E0A4" }>
                {data.map((item, index) => (
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{background: colors[index], color: '#fff'}}
                        contentArrowStyle={{borderRight: '9px solid  rgb(33, 150, 243)'}}
                        date={item.year}
                        dateClassName = "date-class"
                        iconStyle={{background: colors[index], color: '#fff'}}
                        icon={<GrWorkshop/>}

                    >

                        <h3 className="vertical-timeline-element-title">{item.companyname}</h3>
                        <h4 className="vertical-timeline-element-subtitle">{item.position}</h4>
                        <div className="row">
                            {item.techskill.map((tec, index) => (
                                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12">
                                    <div className="techskill">
                                        <p>{tec.techname}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <p>
                            {item.Desc}
                        </p>
                    </VerticalTimelineElement>
                ))}

                <VerticalTimelineElement
                    iconStyle={{background: 'rgb(16, 204, 82)', color: '#fff'}}
                    icon={<GrStar/>}
                />
            </VerticalTimeline>

        </div>
    );
};

export default Work;