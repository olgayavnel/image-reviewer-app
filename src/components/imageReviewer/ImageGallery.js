import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const ImageCarouselWrapper = styled.div`
  background-color: blanchedalmond;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: left;
  overflow: auto;
  white-space: nowrap;
`;
const ImageCarouselHeader = styled.p`
  margin-left: 1rem;
`;
const ImageContainer = styled.div`
  display: inline;
  overflow-x: auto;
  &::-webkit-scrollbar {
    display: none;
  }

  img {
    max-height: 100px;
    margin: 0.5rem;
    border-radius: 10px;
  }
`;

function ImageCarousel() {
  const imageUrls = useSelector((state) => state.images.approvedImageList);

  return (
    <ImageCarouselWrapper>
      <ImageCarouselHeader>APPROVED IMAGES (0)</ImageCarouselHeader>
      <ImageContainer>
        {imageUrls.map((image, index) => (
          <img key={index} src={image} alt='' />
        ))}
      </ImageContainer>
    </ImageCarouselWrapper>
  );
}

export default ImageCarousel;
