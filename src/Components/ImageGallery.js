import React from 'react';
import styled from 'styled-components';

const ImageGalleryWrapper = styled.div`
  background-color: blanchedalmond;
  padding-bottom: 1rem;
  border-radius: 10px;
  border-bottom: 1px solid white;
  display: flex;
  justify-content: left;
`;
const ImageGalleryHeader = styled.p`
  margin-left: 1rem;
`;

function ImageGallery() {
  return (
    <ImageGalleryWrapper>
      <ImageGalleryHeader>APPROVED IMAGES (0)</ImageGalleryHeader>
    </ImageGalleryWrapper>
  );
}

export default ImageGallery;
