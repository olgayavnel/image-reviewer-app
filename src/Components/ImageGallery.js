import React from 'react';
import styled from 'styled-components';

const ImageGalleryWrapper = styled.div`
  background-color: #fec571;
  padding-bottom: 1rem;
  border-bottom: 1px solid white;
`;
const ImageGalleryHeader = styled.p``;

function ImageGallery() {
  return (
    <ImageGalleryWrapper>
      <ImageGalleryHeader>APPROVED IMAGES (0)</ImageGalleryHeader>
    </ImageGalleryWrapper>
  );
}

export default ImageGallery;
