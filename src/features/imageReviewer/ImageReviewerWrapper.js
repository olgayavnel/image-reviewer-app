import React from 'react';
import styled from 'styled-components';
import Footer from './Footer';
import ImageGallery from './ImageGallery';
import ImagePicker from './ImagePicker';

const Section = styled.section`
  background-color: #d1defe;
  height: 100vh;
  width: 60%;
  margin: 1rem auto;
  padding: 0.5rem;
  display: grid;
  gap: 0.5rem;
  grid-template-rows: 0.5fr 3fr 6fr 3fr;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  font-size: 1.2rem;
  /* position: relative; */
  overflow: auto;
  /* white-space: nowrap; */

  &::-webkit-scrollbar {
    display: none;
  }
`;

const Header = styled.div`
  background-color: blanchedalmond;
  padding-bottom: 1rem;
  border-bottom: 1px solid white;
  display: flex;
  justify-content: center;
  border-radius: 10px;
`;

function ImageReviewerWrapper({ imageList, generateNewRandomImage }) {
  return (
    <Section>
      <Header>
        <p>IMAGE APPROVAL APPLICATION</p>
      </Header>
      <ImageGallery />
      <ImagePicker imageList={imageList} />
      <Footer imageList={imageList} {...{ generateNewRandomImage }} />
    </Section>
  );
}

export default ImageReviewerWrapper;