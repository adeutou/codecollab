import React ,{useState,useEffect} from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import './slider.css';
import tuto from "../assets/tuto.jpg";
import forum from "../assets/forum.jpg";
import projet from "../assets/projet.jpg";
import lo from '../assets/logonp.JPG'
const images = [
  {
    id: 1,
    image: `${tuto}`,
    title: "Bienvenue dans CodeCollab",
    text: "Unissez vos forces, partagez vos connaissances, et ensemble, atteignons de nouveaux sommets académiques !",
  },
  {
    id: 2,
    image: `${lo}`,
    title: "Bienvenue dans CodeCollab",
    text: "Unissez vos forces, partagez vos connaissances, et ensemble, atteignons de nouveaux sommets académiques !",
  },
  {
    id: 3,
    image: `${projet}`,
    title: "Bienvenue dans CodeCollab",
    text: "Unissez vos forces, partagez vos connaissances, et ensemble, atteignons de nouveaux sommets académiques !",
  },
];

function Slider() {



  return (
    <Carousel
      autoPlay
      interval={2000}
      infiniteLoop
      showStatus={false}
      showThumbs={false}
      
    >
      {images.map((image) => (
        <div key={image.id}>
          <img className="carousel-image" src={image.image} alt='' />
          <div className="overlay">
            <h2 className='titlee'>{image.title}</h2>
            <p className='texte'>{image.text}</p>
          </div>
        </div>
      ))}
    </Carousel>
  );
}

export default Slider