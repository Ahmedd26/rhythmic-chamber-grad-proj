import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./profileProductHolder.scss";
import DisplayProductCard from "./displayProductCard/DisplayProductCard";

const ProfileProductHolder = ({ productHolderTitle, cardInfo }) => {
  //   Props

  // slick-carousel
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
    appendDots: (dots) => (
      <div>
        <ul className="slick-dots">{dots}</ul>
      </div>
    ),
  };
  return (
    <div className="profileProductHolder">
      <h1>{productHolderTitle}</h1>
      <div className="cardHolder">
        <Slider {...settings}>
          <DisplayProductCard {...cardInfo} />
          <DisplayProductCard {...cardInfo} />
          <DisplayProductCard {...cardInfo} />
          <DisplayProductCard {...cardInfo} />
        </Slider>
      </div>
    </div>
  );
};

export default ProfileProductHolder;

// After API Implementation

/*
import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './profileProductHolder.scss';
import DisplayProductCard from './displayProductCard/DisplayProductCard';

const ProfileProductHolder = ({ productHolderTitle, cardInfo }) => {
  const [cardData, setCardData] = useState([]);

  useEffect(() => {
    // Fetch card data from API
    fetch('api/cardData')
      .then(response => response.json())
      .then(data => setCardData(data))
      .catch(error => console.log(error));
  }, []);

  // slick-carousel settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
    appendDots: dots => (
      <div>
        <ul className="slick-dots">{dots}</ul>
      </div>
    ),
  };

  return (
    <div className="profileProductHolder">
      <h1>{productHolderTitle}</h1>
      <div className="cardHolder">
        <Slider {...settings}>
          {cardData.map((card, index) => (
            <DisplayProductCard key={index} {...card} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ProfileProductHolder;
*/
