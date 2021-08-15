import React from 'react';
import ImageCarousel from '../Carousel';
import Footer from '../Footer';
import Header from '../Header';
import ImagePicker from '../ImagePicker/ImagePicker';
import { Section } from './WrapperStyles';

function Wrapper({ isLoading, randomImage, generateNewRandomImage }) {
  return (
    <Section>
      <Header>
        <p>YOUR PERSONAL IMAGE ASSISTENT</p>
      </Header>
      <ImageCarousel />
      <ImagePicker isLoading={isLoading} randomImage={randomImage} />
      <Footer
        isLoading={isLoading}
        randomImage={randomImage}
        generateNewRandomImage={generateNewRandomImage}
      />
    </Section>
  );
}

export default Wrapper;
