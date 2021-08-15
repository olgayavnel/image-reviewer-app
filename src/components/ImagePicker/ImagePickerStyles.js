import styled from 'styled-components';

export const ImagePickerWrapper = styled.div`
  background-color: #fbebcd;
  min-height: 35vh;
  border-radius: 10px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: rgba(0, 0, 0, 0.06) 0px 2px 4px 0px inset;

  img {
    max-height: 30vh;
    max-width: 100%;
    margin: 0.5rem;
    border-radius: 10px;
  }
`;
