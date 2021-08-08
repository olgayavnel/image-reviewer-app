import React from 'react';
import styled from 'styled-components';

const ImagePickerWrapper = styled.div`
  background-color: #a6ffea;
  padding-bottom: 1rem;
  border-bottom: 1px solid white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Button = styled.button`
  width: 400px;
  height: 200px;
  padding: 1rem;
  border: none;
  border-radius: 10px;
  background-color: aliceblue;
  font-size: 2rem;
`;

function ImagePicker({ imageList }) {
  console.log(imageList.results);

  return (
    <ImagePickerWrapper>
      <p>FETCH AN IMAGE FROM THE API</p>
      <Button>+</Button>
    </ImagePickerWrapper>
  );
}

export default ImagePicker;
