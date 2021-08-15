import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { buttonClicked } from '../../store/slices/buttonsSlice';
import { FiPlus } from 'react-icons/fi';
import { LargeButton } from '../Button';
import { ImagePickerWrapper } from './ImagePickerStyles';

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
        <LargeButton role='large-button' onClick={onButtonClick}>
          <FiPlus />
        </LargeButton>
      )}
    </ImagePickerWrapper>
  );
}

export default ImagePicker;
