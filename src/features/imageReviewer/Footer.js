import React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';

import { imageApproved, imageRejected } from './imagesSlice';

const FooterWrapper = styled.div`
  background-color: blanchedalmond;
  border-radius: 10px;
  border-bottom: 1px solid white;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const FooterCopy = styled.p``;

function Footer({ imageList, generateNewRandomImage }) {
  const dispatch = useDispatch();

  function onApprove() {
    dispatch(imageApproved(imageList[0]));
    generateNewRandomImage();
  }

  function onReject() {
    // under the question ?
    dispatch(imageRejected(imageList[0]));
    generateNewRandomImage();
  }

  const showButton = useSelector((state) => state.images.showButton);

  return (
    <FooterWrapper>
      {showButton && (
        <FooterCopy>
          Click on the + in order to get image recommendations
        </FooterCopy>
      )}
      <button onClick={onApprove}>APPROVE</button>
      <button onClick={onReject}>REJECT</button>
    </FooterWrapper>
  );
}

export default Footer;
