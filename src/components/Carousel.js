import axios from 'axios';
import React, { useEffect, useState } from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import {img_300, noPicture} from '../config/Config';
import "../Styles/Carousel.css";
const handleDragStart = (e) => e.preventDefault();



const Carousel = ({media_type,id}) => {
    const [credits, setCredits] = useState([]);
    const items= credits.map((item,index)=>(
        
            <div className="carouselItem" key={index}>
                <img src={item.profile_path ? `${img_300}/${item.profile_path}` : noPicture}
                alt={item.name}
                onDragStart={handleDragStart}
                className="carouselItem__img"
                />
                  <b className="carouselItem__txt">{item?.name}</b>
            </div>
        )
    );

    const responsive = {
        0: { items: 3},
        512: { items: 5},
        1024: { items: 7},
    };



    const getCredits = async () => {
        const {data} = await axios.get(`https://api.themoviedb.org/3/${media_type}/${id}/credits?api_key=628422e76a4eac3150a9be2e93bde782&language=en-US`);
        setCredits(data.cast);
    };
    
    useEffect(() => {
        getCredits();
    
      
    }, [])
    
  return (
    <AliceCarousel 
    mouseTracking
      infinite
      disableDotsControls
      disableButtonsControls
      responsive={responsive}
      items={items}
      autoPlay
     />
  );
}

export default Carousel;
