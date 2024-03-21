import React from 'react';

import Slider from 'react-slick';
import { images } from '../../constants';

//mentor data for carousel
const postData = [
  {
      profession: 'Doctorant en IT',
      name: 'François Ndje Man',
      imgSrc: images.francois,
  },
  {
      profession: 'Msc. Computer Science',
      name: 'Albert Deutou',
      imgSrc: images.albert,
  },
];

// carousel settings
function SampleNextArrow({ className, style, onClick }) {
  return (
      <div
          className={className}
          style={{ ...style, display: "flex", justifyContent: "center", position: 'absolute', alignItems: "center", background: "#D5EFFA", padding: "28px", borderRadius: "30px", border: "1px solid #1A21BC" }}
          onClick={onClick}
      />
  );
}

function SamplePrevArrow({ className, style, onClick }) {
  return (
      <div
          className={className}
          style={{ ...style, display: "flex", justifyContent: "center", alignItems: "center", background: "#D5EFFA", padding: "28px", borderRadius: "30px", border: "1px solid #1A21BC" }}
          onClick={onClick}
      />
  );
}

const MultipleItems = () => {
  const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 2,
      slidesToScroll: 1,
      arrows: false,
      autoplaySpeed: 4500,
      cssEase: "linear",
      responsive: [

          {
              breakpoint: 1000,
              settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1,
                  infinite: true,
                  dots: false
              }
          },
          {
              breakpoint: 530,
              settings: {
                  slidesToShow : 1,
                  slidesToScroll : 1,
                  infinite : true,
                  dots : false
              }
          }
        ]
    };

    return (
        <div className="py-10 sm-py-24 bg-paleblue" id="mentor">
            <div className='mx-auto max-w-7xl lg-max-w-7xl sm-py-4 px-4 lg-px-8 relative'>
                <h2 className="text-midnightblue text-left text-4xl md-text-55xl font-semibold">Nos mentors.</h2>
                <Slider {...settings}>
                    {postData.map((items, i) => (
                        <div key={i}>
                            <div className='py-14 md-my-10 text-center'>
                                <div className="relative">
                                    <img src={items.imgSrc} alt="user-image" width={150} height={0} className="inline-block m-auto rounded-full" />
                                    <div className="absolute right-[214px] bottom-[42px] bg-white rounded-full p-2">
                                        <img src={images.linkedin} alt="linkedin-image" width={20} height={20} />
                                    </div>
                                </div>
                                <div className="-mt-10">
                                    <h3 className='text-2xl font-semibold text-lightblack'>{items.name}</h3>
                                    <h4 className='text-lg font-normal text-lightblack pt-2 opacity-50'>{items.profession}</h4>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default MultipleItems;