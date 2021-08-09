import React, { useState } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { selectImage } from './imagesSlice';

const ImagePickerWrapper = styled.div`
  background-color: #f3cdff;
  border-radius: 10px;
  padding-bottom: 1rem;
  border-bottom: 1px solid white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ImageContainer = styled.div`
  display: flex;
  flex: 0 2;

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
  const [isHidden, setIsHidden] = useState(true);
  return (
    <ImagePickerWrapper>
      {/* {!isHidden && (
        <ImageContainer>
          <img id='unsplashImage' alt='unsplashImage' src={imageList[0]} />
        </ImageContainer>
      )}
      <Button onClick={() => setIsHidden(false)}>+</Button> */}
      {!isHidden ? (
        <ImageContainer>
          <img id='unsplashImage' alt='unsplashImage' src={imageList[0]} />
        </ImageContainer>
      ) : (
        <Button onClick={() => setIsHidden(false)}>+</Button>
      )}
    </ImagePickerWrapper>
  );
}

export default ImagePicker;
