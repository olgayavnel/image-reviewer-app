import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const ImageGalleryWrapper = styled.div`
  background-color: blanchedalmond;
  padding-bottom: 1rem;
  border-radius: 10px;
  border-bottom: 1px solid white;
  display: flex;
  flex-direction: column;
  justify-content: left;
`;
const ImageGalleryHeader = styled.p`
  margin-left: 1rem;
`;
const ImageContainer = styled.div`
  display: flex;
  margin-left: 1rem;

  img {
    max-height: 100px;
    margin: 0.5rem;
    border-radius: 10px;
  }
`;

function ImageGallery() {
  const imageUrls = useSelector((state) => state.images.approvedImageList);
  console.log(
    '🚀 ~ file: ImageGallery.js ~ line 30 ~ ImageGallery ~ imageUrls',
    imageUrls
  );

  return (
    <ImageGalleryWrapper>
      <ImageGalleryHeader>APPROVED IMAGES (0)</ImageGalleryHeader>
      <ImageContainer>
        {imageUrls.map((image, index) => (
          <img key={index} src={image} alt='' />
        ))}
      </ImageContainer>
    </ImageGalleryWrapper>
  );
}

export default ImageGallery;
