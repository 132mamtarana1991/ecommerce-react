import React, { useState, useEffect } from 'react'
import { FaRegArrowAltCircleLeft, FaRegArrowAltCircleRight } from 'react-icons/fa';

import './Slider.css';
const Slider = ({ images }) => {
    const [index, setIndex] = useState(0);
    useEffect(() => {
        const lastIndex = images.length - 1;
        if (index < 0) {
            setIndex(lastIndex)
        }
        if (index > lastIndex) {
            setIndex(0)
        }
    }, [index, images])
    useEffect(() => {
        let slider = setInterval(() => {
            setIndex(index + 1)
        }, 5000);
        return () => {
            clearInterval(slider)
        }
    }, [index])
    return (
        <div className='section'>
            <div className='section-center'>
                {images.map((image, indexImage) => {
                    let postion = "nextSlide";
                    if (indexImage === index) {
                        postion = "activeSlide"
                    }
                    if (indexImage === index - 1 || (index === 0 && indexImage === images.length - 1)) {
                        postion = "lastSlide"
                    } return (
                        <article className={postion} key={indexImage}>
                            <img src={image} className="banner-img" />
                        </article>
                    )
                })}
                <p className='prev' onClick={() => setIndex(index - 1)}>
                    <FaRegArrowAltCircleLeft />
                </p>
                <p className='next' onClick={() => setIndex(index + 1)}>
                    <FaRegArrowAltCircleRight />
                </p>
            </div>
        </div>
    )
}

export default Slider