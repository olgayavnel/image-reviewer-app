import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { buttonClicked } from './../../store/slices/buttonsSlice';
import { Button, LargeButton } from '../genericComponents/Button';

const ImagePickerWrapper = styled.div`
  background-color: #fbebcd;
  border-radius: 10px;
  padding: 0.2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.06) 0px 2px 4px 0px inset;
`;
const ImageContainer = styled.div`
  display: flex;

  img {
    max-height: 400px;
    max-width: 550px;
    margin: 0.5rem;
    border-radius: 10px;
  }
`;

function ImagePicker({ randomImageUrl }) {
  const dispatch = useDispatch();
  const showButton = useSelector((state) => state.buttons.showButton);

  function onButtonClick() {
    dispatch(buttonClicked(!showButton));
  }

  return (
    <ImagePickerWrapper>
      {!showButton ? (
        <ImageContainer>
          <img id='unsplashImage' alt='unsplashImage' src={randomImageUrl} />
        </ImageContainer>
      ) : (
        <LargeButton onClick={onButtonClick}>+</LargeButton>
      )}
    </ImagePickerWrapper>
  );
}

export default ImagePicker;
