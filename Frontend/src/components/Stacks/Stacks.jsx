import React from 'react';

import { images } from '../../constants';
import Slider from 'react-slick';


//images data for carousel
const data = [
    { imgSrc: images.java },
    { imgSrc: images.php },
    { imgSrc: images.python },
    { imgSrc: images.cpp },
    { imgSrc: images.javaScript },
    { imgSrc: images.reactJS },
    { imgSrc: images.laravel },
    {imgSrc: images.symfony },
    { imgSrc: images.mongoDB },
    { imgSrc: images.nodeJS },
    { imgSrc: images.postgresql },
];

//carousel settings
const MultipleItems = () => {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            }
        ]
    };

    return (
        <div className='text-center my-20'>
            <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                <h2 className="text-midnightblue text-2xl font-semibold">Langages de programmation & Stacks</h2>
                <div className="pt-10 pb-2">
                    <Slider {...settings}>
                        {data.map((item, i) => (
                            <div key={i}>
                                <img src={item.imgSrc} alt={item.imgSrc} width={80} height={36} />
                            </div>
                        ))}
                    </Slider>
                </div>
                <hr />
            </div>
        </div>
    );
};

export default MultipleItems;