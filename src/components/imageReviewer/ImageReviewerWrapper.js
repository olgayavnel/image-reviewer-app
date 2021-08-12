import React from 'react';
import styled from 'styled-components';
import Footer from './Footer';
import ImageCarousel from './ImageGallery';
import ImagePicker from './ImagePicker';

const Section = styled.section`
  min-height: clamp(100vh - 10%);
  max-width: 600px;
  background-color: #d1defe;
  margin: 0 auto;
  padding: 0.5rem;
  display: grid;
  gap: 0.5rem;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  overflow: auto;
  grid-template-columns: minmax(200px, 1fr);
  grid-template-rows: 0.5fr 1r minmax(100px, 1fr) 0.5fr;

  &::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 660px) {
    max-width: 80%;
    max-height: 80%;
  }
`;

const Header = styled.div`
  background-color: #fbebcd;
  box-shadow: rgba(0, 0, 0, 0.06) 0px 2px 4px 0px inset;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  padding: 1rem;
`;

function ImageReviewerWrapper({ randomImageUrl, generateNewRandomImage }) {
  return (
    <Section>
      <Header>
        <p>IMAGE APPROVAL APPLICATION</p>
      </Header>
      <ImageCarousel />
      <ImagePicker randomImageUrl={randomImageUrl} />
      <Footer randomImageUrl={randomImageUrl} {...{ generateNewRandomImage }} />
    </Section>
  );
}

export default ImageReviewerWrapper;
