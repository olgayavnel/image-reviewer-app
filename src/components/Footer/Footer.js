import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { imageApproved, imageRejected } from '../../store/slices/imagesSlice';
import { MenuButton } from '../Button/Button';
import { FiPlus } from 'react-icons/fi';
import { ButtonWrapper, FooterCopy, FooterWrapper } from './FooterStyles';

function Footer({ randomImage, generateNewRandomImage }) {
  const dispatch = useDispatch();

  function onApprove() {
    dispatch(imageApproved(randomImage));
    generateNewRandomImage();
  }

  function onReject() {
    dispatch(imageRejected(randomImage));
    generateNewRandomImage();
  }

  const showButton = useSelector((state) => state.buttons.showButton);

  return (
    <FooterWrapper>
      {showButton ? (
        <FooterCopy role='footer-copy'>
          Click on the {<FiPlus />} in order to get image recommendations
        </FooterCopy>
      ) : (
        <ButtonWrapper>
          <MenuButton onClick={onApprove}>
            <p>APPROVE</p>
          </MenuButton>
          <MenuButton
            rejectedBgColor='true'
            rejectedBorderColor='true'
            onClick={onReject}
          >
            <p>REJECT</p>
          </MenuButton>
        </ButtonWrapper>
      )}
    </FooterWrapper>
  );
}

export default Footer;
