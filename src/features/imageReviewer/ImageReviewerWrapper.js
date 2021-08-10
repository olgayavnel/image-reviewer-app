import React from 'react';
import styled from 'styled-components';
import Footer from './Footer';
import ImageGallery from './ImageGallery';
import ImagePicker from './ImagePicker';

const Section = styled.section`
  background-color: #d1defe;
  height: 100vh;
  width: 600px;
  margin: 1rem auto;
  padding: 0.5rem;
  display: grid;
  gap: 0.5rem;
  grid-template-rows: 0.2fr 0.5fr 2fr 1fr;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  font-size: 1.2rem;
  overflow: auto;

  /* &::-webkit-scrollbar {
    display: none;
  } */
`;
const Header = styled.div`
  background-color: blanchedalmond;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
`;

function ImageReviewerWrapper({ randomImageUrl, generateNewRandomImage }) {
  return (
    <Section>
      <Header>
        <p>IMAGE APPROVAL APPLICATION</p>
      </Header>
      <ImageGallery />
      <ImagePicker randomImageUrl={randomImageUrl} />
      <Footer randomImageUrl={randomImageUrl} {...{ generateNewRandomImage }} />
    </Section>
  );
}

export default ImageReviewerWrapper;
