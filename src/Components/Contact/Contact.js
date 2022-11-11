import React from 'react';
import "./Contact.css"
import { FiSend } from "react-icons/fi";
import Slide from 'react-reveal/Slide';
import gmail from '../Image/gmail.png'
import linkedin from '../Image/linkedin.png'
import github from '../Image/github.png'

const Contact = () => {
    const data = [
        {
            name:"email",
            web:"mailto:indraniko20@gmail.com",
            img:gmail
        },
        {
            name:"linkedin",
            web:"https://www.linkedin.com/in/yuki-hime/",
            img:linkedin
        },
        {
            name:"email",
            web:"https://www.github.com/Niko-Cloud",
            img:github
        }
    ]
    return (
        <div className="container contact-section" id="contact">
            <div className="section-title" id="contact">
                <h5>Contact</h5>
                <span className="line"></span>
            </div>
            <div className="contact">
                {data.map((item, index)=>(
                    <a href={item.web} className="contact-box">
                        <img name={item.name} src={item.img} alt="logo"/>
                    </a>
                ))}

            {/*    <Slide bottom>*/}
            {/*        <div className="col-xl-5 col-lg-5 col-md-5 col-sm-5">*/}
            {/*            <div className="contact-form-image">*/}
            {/*                <img src="https://media.istockphoto.com/photos/closeup-view-of-female-hands-touching-smartphone-white-blank-blurred-picture-id815166664?k=20&m=815166664&s=612x612&w=0&h=ZBYxY9vhILSgXxBnGNYV0eYgT-7up3fQcSSf-gQ2fXc="*/}
            {/*                     alt="Contact-Form"*/}
            {/*                />*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </Slide>*/}
            {/*    <Slide right>*/}
            {/*        <div className="col-xl-7 col-lg-7 col-md-7 col-sm-7">*/}
            {/*            <div className="text-center">*/}
            {/*                <h5>Contact Me</h5>*/}
            {/*            </div>*/}
            {/*            <form className="contact-form-all">*/}
            {/*                <div className="contact-form">*/}
            {/*                    <label className="form-label">Name</label>*/}
            {/*                    <input type="text" className="form-control"/>*/}
            {/*                </div>*/}
            {/*                <div className="contact-form">*/}
            {/*                    <label className="form-label">E-mail</label>*/}
            {/*                    <input type="text" className="form-control"/>*/}
            {/*                </div>*/}
            {/*                <div className="contact-form">*/}
            {/*                    <label className="form-label">Job Types</label>*/}
            {/*                    <select className="custom-select-tag form-select">*/}
            {/*                        <option>--- Pick Job Type ---</option>*/}
            {/*                        <option>Full-Time</option>*/}
            {/*                        <option>Internship</option>*/}
            {/*                        <option>Working Student</option>*/}
            {/*                        <option>Contract Job</option>*/}
            {/*                    </select>*/}
            {/*                </div>*/}
            {/*                <div className="contact-form">*/}
            {/*                    <label className="form-label">Message</label>*/}
            {/*                    <textarea rows="4" type="text" className="form-control"/>*/}
            {/*                </div>*/}
            {/*                <div className="button-submit">*/}
            {/*                    <p>Send  <FiSend size={20}/></p>*/}
            {/*                </div>*/}
            {/*            </form>*/}
            {/*        </div>*/}
            {/*    </Slide>*/}
            </div>

        </div>
    );
};

export default Contact;