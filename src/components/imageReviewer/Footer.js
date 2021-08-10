import React from 'react';
import styled from 'styled-components/macro';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { imageApproved, imageRejected } from '../../store/slices/imagesSlice';
import { Button } from '../genericComponents/Button';

const FooterWrapper = styled.div`
  background-color: blanchedalmond;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const FooterCopy = styled.p``;
const ButtonWrapper = styled.div`
  display: flex;
  gap: 1rem;
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
          Click on the + in order to get image recommendations
        </FooterCopy>
      ) : (
        <ButtonWrapper>
          <Button bgColorOnHover='true' onClick={onApprove}>
            APPROVE
          </Button>
          <Button bgColorOnHover='true' onClick={onReject}>
            REJECT
          </Button>
        </ButtonWrapper>
      )}
    </FooterWrapper>
  );
}

export default Footer;
