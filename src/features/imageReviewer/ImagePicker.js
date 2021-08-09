import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { buttonClicked } from './imagesSlice';

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
  const dispatch = useDispatch();
  const showButton = useSelector((state) => state.images.showButton);

  function onButtonClick() {
    dispatch(buttonClicked(!showButton));
  }

  return (
    <ImagePickerWrapper>
      {!showButton ? (
        <ImageContainer>
          <img id='unsplashImage' alt='unsplashImage' src={imageList[0]} />
        </ImageContainer>
      ) : (
        <Button onClick={onButtonClick}>+</Button>
      )}
    </ImagePickerWrapper>
  );
}

export default ImagePicker;
