import React from 'react';
import styled from 'styled-components';
import Footer from './Footer';
import ImageGallery from './ImageGallery';
import ImagePicker from './ImagePicker';

const Section = styled.section`
  background-color: #d1defe;
  height: 90vh;
  width: 80%;
  margin: 1rem auto;
  padding: 0.5rem;
  display: grid;
  gap: 0.5rem;
  grid-template-rows: 0.5fr 3fr 6fr 4fr;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  font-size: 1.2rem;
`;

const Header = styled.div`
  background-color: #ed87e48e;
  padding-bottom: 1rem;
  border-bottom: 1px solid white;
`;

function ReviewerWrapper({ imageList }) {
  console.log(imageList.results);
  return (
    <Section>
      <Header>
        <h4>IMAGE APPROVAL APPLICATION</h4>
      </Header>
      <ImageGallery />
      <ImagePicker imageList={imageList} />
      <Footer />
    </Section>
  );
}

export default ReviewerWrapper;
