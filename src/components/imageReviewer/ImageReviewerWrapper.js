import React from 'react';
import styled from 'styled-components';
import Footer from './Footer';
import ImageCarousel from './ImageGallery';
import ImagePicker from './ImagePicker';

const Section = styled.section`
  background-color: #d1defe;
  height: 100%;
  width: 80%;
  margin: 2rem auto 2rem;
  padding: 0.5rem;
  display: grid;
  gap: 0.5rem;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  font-size: 1.2rem;
  letter-spacing: 0.2rem;
  overflow: auto;
  grid-template-columns: minmax(100px, 1fr);
  position: relative;
  top: 20px;

  &::-webkit-scrollbar {
    display: none;
  }

  @media (min-width: 1120px) {
    width: 50%;
  }
`;

const Header = styled.div`
  background-color: #fbebcd;
  box-shadow: rgba(0, 0, 0, 0.06) 0px 2px 4px 0px inset;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  padding: 0.2rem;

  @media (max-width: 700px) {
    font-size: 1rem;
  }

  @media (max-width: 440px) {
    font-size: 0.7rem;
    padding: 0.5rem;
  }

  @media (max-width: 340px) {
    font-size: 0.5rem;
  }
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
