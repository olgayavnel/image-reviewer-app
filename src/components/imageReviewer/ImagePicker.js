import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { buttonClicked } from './../../store/slices/buttonsSlice';
import { LargeButton } from '../genericComponents/Button';
import { FiPlus } from 'react-icons/fi';

const ImagePickerWrapper = styled.div`
  background-color: #fbebcd;
  min-height: 35vh;
  border-radius: 10px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.06) 0px 2px 4px 0px inset;

  img {
    height: 40vh;
    max-width: 100%;
    margin: 0.5rem;
    border-radius: 10px;
  }
`;

function ImagePicker({ randomImage }) {
  const dispatch = useDispatch();
  const showButton = useSelector((state) => state.buttons.showButton);

  function onButtonClick() {
    dispatch(buttonClicked(!showButton));
  }

  return (
    <ImagePickerWrapper>
      {!showButton ? (
        <img
          id={randomImage.id}
          alt='unsplashImage'
          src={randomImage.randomImageUrl}
        />
      ) : (
        <LargeButton onClick={onButtonClick}>
          <FiPlus />
        </LargeButton>
      )}
    </ImagePickerWrapper>
  );
}

export default ImagePicker;
