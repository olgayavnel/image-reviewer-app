import React from 'react';
import { useSelector } from 'react-redux';
import {
  ImageCarouselHeader,
  ImageCarouselWrapper,
  ImageContainer,
} from './CarouselStyles';

function ImageCarousel() {
  const randomImageObject = useSelector(
    (state) => state.images.approvedImageList
  );

  const randomImageUrls = randomImageObject.map(
    (image) => image.randomImageUrl
  );

  const imageCount = randomImageUrls.length;

  return (
    <ImageCarouselWrapper>
      <ImageCarouselHeader>APPROVED IMAGES ({imageCount})</ImageCarouselHeader>
      <ImageContainer>
        {randomImageUrls
          .map((image, index) => <img key={index} src={image} alt='' />)
          .reverse()}
      </ImageContainer>
    </ImageCarouselWrapper>
  );
}

export default ImageCarousel;
