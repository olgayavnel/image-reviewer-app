import styled from 'styled-components';

export const Button = styled.button`
  font-family: 'Poppins', sans-serif;
  color: #2b4893;
  background: transparent;
  white-space: nowrap;
  cursor: pointer;
  text-decoration: none;
  border: 3px solid #d1defe;

  font-size: ${({ large }) => (large ? '2rem;' : '1.5rem')};
  background-color: ${({ large }) => (large ? 'aliceblue' : '')};
  border-radius: ${({ large }) => (large ? '10px' : '50px')};
  padding: ${({ large }) => (large ? '1rem' : '0.5rem 1rem')};
  margin: ${({ large }) => (large ? '1rem' : '')};
  width: ${({ large }) => (large ? '400px' : '200px')};
  height: ${({ large }) => (large ? '200px' : '')};

  &:hover {
    background-color: ${({ bgColorOnHover }) =>
      bgColorOnHover ? '#D1DEFE' : ''};
    border: none;
  }
`;
