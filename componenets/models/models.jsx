import React from "react";
import { Link } from 'react-router-dom';
import "./models.css";

const Models = ({ models }) => {

    return(
        <div className="container">
            <div className="model-container">
                {models.map(model => (
                    <div className="model-wrap" key={model.id}>
                        <Link to={`/models/${model.id}`}>
                            <img src={model.imageUrl} alt={model.name} />
                            {/*<p className="model-name">{model.name}</p>*/}
                        </Link>
                    </div>
                ))}
            </div>
        </div>
        
    )
}

export default Models;
/*
import React from "react";
import { useState } from "react";
import "./gallery.css";
import IMAGES from "../../images/gd/images.js";

const imgSrc = [
    IMAGES.img118, IMAGES.img122, IMAGES.img134, IMAGES.img142, IMAGES.img156, IMAGES.img165, IMAGES.img17, IMAGES.img170,
    IMAGES.img171, IMAGES.img173, IMAGES.img183, IMAGES.img185, IMAGES.img188, IMAGES.img189, IMAGES.img19, IMAGES.img196,
    IMAGES.img197, IMAGES.img205, IMAGES.img212, IMAGES.img213, IMAGES.img22, IMAGES.img222, IMAGES.img23, IMAGES.img240,
    IMAGES.img25, IMAGES.img261, IMAGES.img266, IMAGES.img268, IMAGES.img27, IMAGES.img274, IMAGES.img276, IMAGES.img278,
    IMAGES.img291, IMAGES.img299, IMAGES.img30, IMAGES.img300, IMAGES.img301, IMAGES.img305, IMAGES.img307, IMAGES.img312,
    IMAGES.img316, IMAGES.img318, IMAGES.img320, IMAGES.img325, IMAGES.img328, IMAGES.img335, IMAGES.img345, IMAGES.img349
]

const Gallery = () => {

    const [model, setModels] = useState("");
    return(
        <div className="container">
            <div className="model-container">
                <div className="model-wrap">
                    <img src={IMAGES.img17} alt="model 1" onClick={() => setModels("model 1")}/>
                    {console.log(model)}
                </div>
                <div className="model-wrap">
                    <img src={IMAGES.img27} alt="model 2" onClick={() => setModels("model 2")}/>
                    {console.log(model)}
                </div>
                <div className="model-wrap">
                    <img src={IMAGES.img134} alt="model 3" onClick={() => setModels("model 3")}/>
                    {console.log(model)}
                </div>
                <div className="model-wrap">
                    <img src={IMAGES.img118} alt="model 4" onClick={()=> setModels("model 4")}/>
                    {console.log(model)}
                </div>
            </div>
            {/*<div className="img-grid">

                {imgSrc.map((index, i) => <div className="img-wrap" key={i}>
                    <img src={index} alt={index}></img>
                </div>)}
            </div>*/
           /* <Gallery model/>
        </div>

    )
}

export default Gallery;*/