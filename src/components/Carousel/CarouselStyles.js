import styled from 'styled-components';

export const ImageCarouselWrapper = styled.div`
  background-color: #fbebcd;
  border-radius: 10px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: left;
  overflow: auto;
  white-space: nowrap;
  box-shadow: rgba(0, 0, 0, 0.06) 0px 2px 4px 0px inset;
`;

export const ImageCarouselHeader = styled.p`
  margin-left: 1rem;
`;

export const ImageContainer = styled.div`
  display: inline;
  overflow-x: auto;
  margin-left: 0.5rem;

  &::-webkit-scrollbar {
    display: block;
    width: 1px;
    height: 0.7rem;

    @media (max-width: 660px) {
      height: 0.5rem;
    }
  }

  &::-webkit-scrollbar-thumb {
    background-color: #d0dffe;
    border-radius: 20px;
    box-shadow: rgba(0, 0, 0, 0.06) 0px 2px 4px 0px inset;
  }

  img {
    height: 100%;
    max-height: 70px;
    margin: 1rem 0.5rem 0.5rem;
    border-radius: 10px;
  }
`;
