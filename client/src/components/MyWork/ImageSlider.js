import React from 'react'
import {useState} from "react";
import './myWork.css'

const ImageSlider = ({slides}) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const slideStyles = {
        width: "100%",
        height: "100%",
        borderRadius: "10px",
        backgroundPosition: "center",
        border: "solid",
        backgroundSize: "cover",
        backgroundImage: `url(${slides[currentIndex].img})`
    }

    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    }

    const goToNext = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    }

    return (
    <div className="sliderStyles">
        <div onClick={goToPrevious} className="leftArrowStyles">
            ❰
        </div>
        <div onClick={goToNext} className="rightArrowStyles">
            ❱
        </div>
        <a href={slides[currentIndex].link} target="_blank" rel="noopener noreferrer">
            <div style={slideStyles}></div>
        </a>
    </div>
    )
}

export default ImageSlider;