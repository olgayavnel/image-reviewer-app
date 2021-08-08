import React from 'react';
import styled from 'styled-components';

const ImageGalleryWrapper = styled.div`
  background-color: #fec571;
`;
const ImageGalleryHeader = styled.h4``;

function ImageGallery() {
  return (
    <ImageGalleryWrapper>
      <ImageGalleryHeader>APPROVED IMAGES (0)</ImageGalleryHeader>
    </ImageGalleryWrapper>
  );
}

export default ImageGallery;
