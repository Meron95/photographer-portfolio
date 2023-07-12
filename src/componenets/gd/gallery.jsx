import React, { useState } from "react";
import "./gallery.css";
import IMAGES from "../../images/gd/images.js";
import { useParams } from "react-router-dom";
import Modal from "../modals/Modal";

const Gallery = ({ models }) => {

    // State to store the selected image URL
    const [selectedImage, setSelectedImage] = useState(null);

    // Function to handle image selection
    const handleImageClick = (image) => {
        setSelectedImage(image);
    };

    // Function to clear selected image
    const clearSelectedImage = () => {
        setSelectedImage(null);
    };

    // array of images for diffrent models
    const imageArrays = [
        {
          modelId: 1,
          images: [IMAGES.img118, IMAGES.img122, IMAGES.img134, IMAGES.img142, IMAGES.img156, IMAGES.img165, IMAGES.img17,
            IMAGES.img318, IMAGES.img320, IMAGES.img325, IMAGES.img328, IMAGES.img335, IMAGES.img345, IMAGES.img349,
            IMAGES.img27, IMAGES.img274, IMAGES.img276, IMAGES.img278
            ],
        },
        {
          modelId: 2,
          images: [IMAGES.img291, IMAGES.img299, IMAGES.img30, IMAGES.img300, IMAGES.img301, IMAGES.img305, IMAGES.img307, IMAGES.img312,
            IMAGES.img197, IMAGES.img205, IMAGES.img212, IMAGES.img213, IMAGES.img22, IMAGES.img222, IMAGES.img23, IMAGES.img240,
            IMAGES.img118, IMAGES.img122, IMAGES.img134, IMAGES.img142, IMAGES.img156
            ],
        },
        {
            modelId: 3,
            images: [IMAGES.img171, IMAGES.img173, IMAGES.img183, IMAGES.img185, IMAGES.img188, IMAGES.img189, IMAGES.img19, IMAGES.img196,
                IMAGES.img266, IMAGES.img268, IMAGES.img27, IMAGES.img274, IMAGES.img276, IMAGES.img278,
                IMAGES.img291, IMAGES.img299, IMAGES.img30, IMAGES.img300, IMAGES.img301, IMAGES.img305, IMAGES.img307, IMAGES.img312,
            ],
        },
        {
            modelId: 4,
            images: [
                IMAGES.img197, IMAGES.img205, IMAGES.img212, IMAGES.img213, IMAGES.img22, IMAGES.img222, IMAGES.img23, IMAGES.img240,
                IMAGES.img316, IMAGES.img318, IMAGES.img142, IMAGES.img156, IMAGES.img165, IMAGES.img300, IMAGES.img301, IMAGES.img305, IMAGES.img307, 
                IMAGES.img312, IMAGES.img118, IMAGES.img122, IMAGES.img134, IMAGES.img142, IMAGES.img156
            ],
        },
      ];
    const { id } = useParams();
    const selectedModel = models.find(model => model.id === parseInt(id));
  
    if (!selectedModel) {
      return <div>Model not found</div>;
    }

    const selectedArray = imageArrays.find((array) => array.modelId === selectedModel.id);

    return(
        <div className="container">
            <div className="img-grid">
                {selectedArray.images.map((image, i) =>
                <div className="img-wrap" key={i}>
                    <img src={image} alt={i} 
                    onClick={() => handleImageClick(image)}/>    
                </div>)}
                {/* Render the Modal component if an image is selected */}
                {selectedImage && <Modal selected={selectedImage} setSelected={clearSelectedImage}/>} 
            </div>   
        </div>
    );
}

export default Gallery;