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
`;

const Header = styled.h4``;

function ReviewerWrapper() {
  return (
    <Section>
      <Header>IMAGE APPROVAL APPLICATION</Header>
      <ImageGallery />
      <ImagePicker />
      <Footer />
    </Section>
  );
}

export default ReviewerWrapper;
