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
                            href="https://www.instagram.com/">
                            <img src={logo} alt="icon"/> <strong>@powergwin</strong></a>
                    </div>
                </div>
                <div className="col-md-8 col-sm-12">
                    <h2>Hello and welcome!</h2>
    
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam dignissimos facere esse amet 
                        dolorem aliquid distinctio? Beatae ab odit, eveniet saepe aperiam nihil optio debitis porro 
                        repellat provident labore iusto?
                    </p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias in cumque deleniti reprehenderit 
                        harum provident quae aperiam minus ut voluptates. Enim neque explicabo minima atque eum doloribus 
                        similique magnam et..
                    </p>
        
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum incidunt provident consectetur libero 
                        consequuntur? Atque iure totam consectetur, recusandae non perspiciatis voluptatum veritatis aliquam ea 
                        tempora, suscipit aut assumenda expedita!
                    </p>
        
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla harum quia sapiente esse vitae mollitia, 
                        veniam expedita doloremque, iure architecto eligendi facilis? Veritatis vero cupiditate fugit illum blanditiis 
                        quam odit?
                    </p>
        
                    <p>Consequuntur harum at facilis obcaecati quibusdam dolor, totam sed?.</p>
        
                </div>
            </div>
        </div>
    )
}

export default About;