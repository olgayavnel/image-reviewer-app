import styled from 'styled-components';

export const Section = styled.section`
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
    max-height: 600px;
    grid-template-rows: 0.2fr 1fr fr 0.5fr;
  }
`;
