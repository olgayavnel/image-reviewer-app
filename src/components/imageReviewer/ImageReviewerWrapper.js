import React from 'react';
import styled from 'styled-components';
import Footer from './Footer';
import ImageCarousel from './ImageGallery';
import ImagePicker from './ImagePicker';

const Section = styled.section`
  max-height: calc(100vh - 10%);
  max-width: 600px;
  margin: 0 auto;
  padding: 0.5rem;

  display: grid;
  gap: 0.8rem;
  grid-template-columns: minmax(200px, 500px);
  overflow: auto;

  background-color: #d1defe;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  font-size: 1rem;
  letter-spacing: 0.2rem;

  &::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 660px) {
    max-width: 80%;
    font-size: 0.8rem;
    letter-spacing: 0.1rem;
  }

  @media (max-width: 320px) {
    max-height: 500px;
    grid-template-rows: 0.2fr 1fr fr 0.5fr;
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
  text-align: center;
`;

function ImageReviewerWrapper({ randomImage, generateNewRandomImage }) {
  return (
    <Section>
      <Header>
        <p>YOUR PERSONAL IMAGE ASSISTENT</p>
      </Header>
      <ImageCarousel />
      <ImagePicker randomImage={randomImage} />
      <Footer randomImage={randomImage} {...{ generateNewRandomImage }} />
    </Section>
  );
}

export default ImageReviewerWrapper;
