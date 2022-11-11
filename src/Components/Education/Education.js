import React from 'react';
import {FaSchool} from "react-icons/fa";
import {VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import {GrStar} from "react-icons/gr";

const Education = () => {

    const data = [
        {
            name: "Universitas Diponegoro",
            degree: "Bachelor in Informatics",
            year: "2020 - Present",
            // Desc:"Mahasiswa Informatika S1 Universitas Diponegoro"
        },
        {
            name: "SMA N 1 Karanganom",
            degree: "MIPA",
            year: "2018 - 2020",
            // Desc:"MIPA SMA N 1 Karanganom"
        },
    ]

    const colors = [
        "#ef4064",
        "#3895b1",
        "#e04def",
        "#d2831b",
        "#a30113"
    ]

    return (
        <div className="container" id="education">
            <div className="section-title">
                <h5>Education</h5>
                <span className="line"></span>
            </div>

            <VerticalTimeline lineColor={"#74E0A4"}>
                {data.map((item, index) => (
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{background: colors[index], color: '#fff'}}
                        contentArrowStyle={{borderRight: '9px solid  rgb(33, 150, 243)'}}
                        date={item.year}
                        dateClassName="date-class"
                        iconStyle={{background: colors[index], color: '#fff'}}
                        icon={<FaSchool/>}

                    >

                        <h3 className="vertical-timeline-element-title">{item.name}</h3>
                        <h4 className="vertical-timeline-element-subtitle" style={{color:'black'}}>{item.degree}</h4>
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

export default Education;