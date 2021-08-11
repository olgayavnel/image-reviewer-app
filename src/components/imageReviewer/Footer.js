import React from 'react';
import styled from 'styled-components/macro';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { imageApproved, imageRejected } from '../../store/slices/imagesSlice';
import { MenuButton } from '../genericComponents/Button';
import { FiPlus } from 'react-icons/fi';

const FooterWrapper = styled.div`
  background-color: #fbebcd;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  box-shadow: rgba(0, 0, 0, 0.06) 0px 2px 4px 0px inset;
`;
const FooterCopy = styled.p`
  text-align: center;

  @media (max-width: 700px) {
    font-size: 1rem;
  }

  @media (max-width: 440px) {
    font-size: 0.7rem;
  }

  @media (max-width: 340px) {
    font-size: 0.5rem;
  }
`;
const ButtonWrapper = styled.div`
  display: flex;
  gap: 1rem;
  margin: 0.5rem;
`;

function Footer({ randomImageUrl, generateNewRandomImage }) {
  const dispatch = useDispatch();

  function onApprove() {
    dispatch(imageApproved(randomImageUrl));
    generateNewRandomImage();
  }

  function onReject() {
    // under the question ?
    dispatch(imageRejected(randomImageUrl));
    generateNewRandomImage();
  }

  const showButton = useSelector((state) => state.buttons.showButton);

  return (
    <FooterWrapper>
      {showButton ? (
        <FooterCopy>
          Click on the {<FiPlus />} in order to get image recommendations
        </FooterCopy>
      ) : (
        <ButtonWrapper>
          <MenuButton onClick={onApprove}>APPROVE</MenuButton>
          <MenuButton rejectedBgColor='true' onClick={onReject}>
            REJECT
          </MenuButton>
        </ButtonWrapper>
      )}
    </FooterWrapper>
  );
}

export default Footer;
