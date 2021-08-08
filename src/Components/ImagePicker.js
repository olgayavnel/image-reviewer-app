import React, { useState } from 'react';
import styled from 'styled-components';

const ImagePickerWrapper = styled.div`
  background-color: #a6ffea;
  padding-bottom: 1rem;
  border-bottom: 1px solid white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ImageContainer = styled.div`
  display: flex;

  img {
    max-height: 400px;
    margin: 0.5rem;
    border-radius: 10px;
  }
`;

const Button = styled.button`
  width: 400px;
  height: 200px;
  padding: 1rem;
  border: none;
  border-radius: 10px;
  background-color: aliceblue;
  font-size: 2rem;
`;

function ImagePicker({ imageList }) {
  const [fetchedImage, setFetchedImage] = useState('');
  return (
    <ImagePickerWrapper>
      {fetchedImage ? (
        <ImageContainer>
          <img id='unsplashImage' alt='unsplashImage' src={fetchedImage} />
        </ImageContainer>
      ) : (
        <Button onClick={() => setFetchedImage(imageList)}>+</Button>
      )}
    </ImagePickerWrapper>
  );
}

export default ImagePicker;
