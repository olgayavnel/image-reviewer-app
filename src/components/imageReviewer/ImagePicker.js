import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { buttonClicked } from './../../store/slices/buttonsSlice';
import { LargeButton } from '../genericComponents/Button';
import { FiPlus } from 'react-icons/fi';

const ImagePickerWrapper = styled.div`
  background-color: #fbebcd;
  border-radius: 10px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.06) 0px 2px 4px 0px inset;

  img {
    max-height: 20vw;
    max-width: 100%;
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
        <img id='unsplashImage' alt='unsplashImage' src={randomImageUrl} />
      ) : (
        <LargeButton onClick={onButtonClick}>
          <FiPlus />
        </LargeButton>
      )}
    </ImagePickerWrapper>
  );
}

export default ImagePicker;
