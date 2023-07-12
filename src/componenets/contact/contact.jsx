import React from "react";
import contactImg from '../../img/12.jpg';
import phoneLogo from '../../img/phone.png';
import worldLogo from '../../img/world.png';

const Contact = () => {
  
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-4 col-sm-8" style={{paddingBottom: "50px"}}>
                    <img className="img_style" src={contactImg} alt="img12"/>
                </div>
            <div className="col-md-8 col-sm-12">
                <p>You can reach me via email or it is also possible to call me for business inquiries.</p>
                <p>
                    <img src={phoneLogo} alt="phoneimg"/>
                    <strong> 071234567</strong>
                </p>
                <p>
                    <img src={worldLogo} alt="worldimg"/>
                    <strong> godwinjonah0@gmail.com</strong>
                </p>
            </div>
            </div>
        </div>
    )
}

export default Contact;