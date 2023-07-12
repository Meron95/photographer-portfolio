import React from "react";
import "./about.css"
import img from "../../img/11.jpg";
import logo from "../../img/instagram.png";

const About = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-4 col-sm-8" style={{ paddingBottom: "50px"}}>
                    <img className="img_style" src={img} alt="picNum1"/>
                    <div className="about_img">
                        <a className="icon_style" target="_blank" rel="noreferrer"
                            href="https://www.instagram.com/powergwin/">
                            <img src={logo} alt="icon"/> <strong>@powergwin</strong></a>
                    </div>
                </div>
                <div className="col-md-8 col-sm-12">
                    <h2>Hello and welcome!</h2>
    
                    <p>My name is Godwin Ibong currently living in Uppsala Sweden. I was born and raised in Africa after moving
                        to a totally different country to pursue my career in soccer, I discovered many new things and meeting
                        amazing people and amazing lifestyle in a big creature nature. I am a model in disguise who deserves
                        king-level photography.
                    </p>
                    <p>Through my journey in soccer and in Sweden I discovered that I can combine soccer and modeling, because
                        of my amazing look and body with a great fashion and lifestyle which makes me unique. I have an amazing
                        body that can be classified like that of a super hero because of my work ethics.</p>
        
                    <p>I believe I can be a great personality in the society because modeling and football is a lifestyle that
                        can go hand to hand in our daily life, which deal with health and living.</p>
        
                    <p>I want to be able to use my gift to change life and help people to know they can be what they want. My
                        role model is cristiano ronaldo, I love him because of his work ethics and how harding working he is.</p>
        
                    <p>My ambition is to become a top soccer player and a professional model.</p>
        
                </div>
            </div>
        </div>
    )
}

export default About;