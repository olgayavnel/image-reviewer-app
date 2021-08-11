import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const ImageCarouselWrapper = styled.div`
  background-color: #fbebcd;
  border-radius: 10px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: left;
  overflow: auto;
  white-space: nowrap;
  box-shadow: rgba(0, 0, 0, 0.06) 0px 2px 4px 0px inset;
`;

const ImageCarouselHeader = styled.p`
  margin-left: 1rem;

  @media (max-width: 700px) {
    font-size: 1rem;
  }

  @media (max-width: 440px) {
    font-size: 0.7rem;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
  }

  @media (max-width: 340px) {
    font-size: 0.5rem;
  }
`;
const ImageContainer = styled.div`
  display: inline;
  overflow-x: auto;
  margin-left: 0.5rem;
  &::-webkit-scrollbar {
    display: none;
  }

  img {
    max-height: 100px;
    margin: 0.5rem;
    border-radius: 10px;

    @media (max-width: 700px) {
      max-height: 5rem;
    }

    @media (max-width: 440px) {
      max-height: 3rem;
    }
  }
`;

function ImageCarousel() {
  const imageUrls = useSelector((state) => state.images.approvedImageList);
  const imageCount = imageUrls.length;

  return (
    <ImageCarouselWrapper>
      <ImageCarouselHeader>APPROVED IMAGES ({imageCount})</ImageCarouselHeader>
      <ImageContainer>
        {imageUrls
          .map((image, index) => <img key={index} src={image} alt='' />)
          .reverse()}
      </ImageContainer>
    </ImageCarouselWrapper>
  );
}

export default ImageCarousel;
