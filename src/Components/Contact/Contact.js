import React from 'react';
import "./Contact.css"
import { FiSend } from "react-icons/fi";
import Slide from 'react-reveal/Slide';

const Contact = () => {
    return (
        <div className="container contact-section" id="contact">
            <div className="row">
                <Slide bottom>
                    <div className="col-xl-5 col-lg-5 col-md-5 col-sm-5">
                        <div className="contact-form-image">
                            <img src="https://media.istockphoto.com/photos/closeup-view-of-female-hands-touching-smartphone-white-blank-blurred-picture-id815166664?k=20&m=815166664&s=612x612&w=0&h=ZBYxY9vhILSgXxBnGNYV0eYgT-7up3fQcSSf-gQ2fXc="
                                 alt="Contact-Form"
                            />
                        </div>
                    </div>
                </Slide>
                <Slide right>
                    <div className="col-xl-7 col-lg-7 col-md-7 col-sm-7">
                        <div className="text-center">
                            <h5>Contact Me</h5>
                        </div>
                        <form className="contact-form-all">
                            <div className="contact-form">
                                <label className="form-label">Name</label>
                                <input type="text" className="form-control"/>
                            </div>
                            <div className="contact-form">
                                <label className="form-label">E-mail</label>
                                <input type="text" className="form-control"/>
                            </div>
                            <div className="contact-form">
                                <label className="form-label">Job Types</label>
                                <select className="custom-select-tag form-select">
                                    <option>--- Pick Job Type ---</option>
                                    <option>Full-Time</option>
                                    <option>Part-Time</option>
                                    <option>Working Student</option>
                                    <option>Contract Job</option>
                                </select>
                            </div>
                            <div className="contact-form">
                                <label className="form-label">Message</label>
                                <textarea rows="4" type="text" className="form-control"/>
                            </div>
                            <div className="button-submit">
                                <p>Send  <FiSend size={20}/></p>
                            </div>
                        </form>
                    </div>
                </Slide>
            </div>
        </div>
    );
};

export default Contact;