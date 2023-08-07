import React, { useState } from "react";
import "./gallery.css";
import IMAGES from "../../images/gd/images.js";
import { useParams } from "react-router-dom";
import Modal from "../modals/Modal";

const Gallery = ({ models }) => {

    const { id } = useParams();
    const selectedModel = models.find(model => model.id === parseInt(id));

    // State to store the selected image URL
    const [selectedImage, setSelectedImage] = useState(null);
    const [imageIndex, setImageIndex] = useState(0);
    const [showSlideshow, setShowSlideshow] = useState(false);

    // array of images for diffrent models
    const imageArrays = [
        {
            modelId: 1,
            images: [IMAGES.img118, IMAGES.img122, IMAGES.img134, IMAGES.img142, IMAGES.img156, IMAGES.img165, IMAGES.img17,
            IMAGES.img171, IMAGES.img142, IMAGES.img165, IMAGES.img74, IMAGES.img75, IMAGES.img30, IMAGES.img17,
            ],
        },
        {
            modelId: 2,
            images: [IMAGES.img98, IMAGES.img156, IMAGES.img30, IMAGES.img88, IMAGES.img98, IMAGES.img56, IMAGES.img46, IMAGES.img19,
            IMAGES.img36, IMAGES.img134, IMAGES.img122, IMAGES.img22, IMAGES.img118, IMAGES.img23, IMAGES.img170,
            IMAGES.img118, IMAGES.img122, IMAGES.img134, IMAGES.img142, IMAGES.img156
            ],
        },
        {
            modelId: 3,
            images: [IMAGES.img171, IMAGES.img170, IMAGES.img165, IMAGES.img156, IMAGES.img142, IMAGES.img134, IMAGES.img19, IMAGES.img122,
                IMAGES.img46, IMAGES.img53, IMAGES.img56, IMAGES.img65, IMAGES.img74, IMAGES.img75,
                IMAGES.img134, IMAGES.img17, IMAGES.img30,
            ],
        },
        {
            modelId: 4,
            images: [
                IMAGES.img53, IMAGES.img56, IMAGES.img65, IMAGES.img74, IMAGES.img75, IMAGES.img88, IMAGES.img98, IMAGES.img118,
                IMAGES.img122, IMAGES.img134, IMAGES.img142, IMAGES.img156, IMAGES.img165, IMAGES.img170, IMAGES.img171, IMAGES.img17, IMAGES.img19, 
                IMAGES.img22, IMAGES.img118, IMAGES.img23, IMAGES.img25, IMAGES.img142, IMAGES.img156
            ],
        },
    ];

    // Function to handle image selection
    const handleImageClick = (image, index) => {
        setSelectedImage(image);
        setImageIndex(index);
        setShowSlideshow(true);
    };

    const handleSlideshowPrev = () => {
        setImageIndex((prevIndex) => (prevIndex === 0 ? selectedArray.images.length - 1 : prevIndex - 1));
      };
    
      const handleSlideshowNext = () => {
        setImageIndex((prevIndex) => (prevIndex === selectedArray.images.length - 1 ? 0 : prevIndex + 1));
      };
    
      const closeSlideshow = () => {
        setShowSlideshow(false);
        setSelectedImage(null);
        setImageIndex(0);
      };

    if (!imageArrays) {
        return <div>No images available for this model</div>;
    }

    if (!selectedModel) {
        return <div>Model not found</div>;
    }
    
    const selectedArray = imageArrays.find((array) => array.modelId === selectedModel.id);

    return(
        <div className="container">
            <div className="img-grid">
                {selectedArray.images.map((image, index) =>
                <div className="img-wrap" key={index}>
                    <img src={image} alt={index} 
                    onClick={() => handleImageClick(image, index)}/>    
                </div>)}
                {/* Render the Modal component if an image is selected */}
                {showSlideshow && (
                    <Modal 
                        selected={selectedArray.images[imageIndex]}
                        setSelected={closeSlideshow}
                        onPrev={handleSlideshowPrev}
                        onNext={handleSlideshowNext}
                />)}
                {/*{selectedImage && <Modal selected={selectedImage} setSelected={clearSelectedImage}/>} */}
            </div>   
        </div>
    );
}

export default Gallery;