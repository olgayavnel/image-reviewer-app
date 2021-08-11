import styled from 'styled-components';

const Button = styled.button`
  font-family: 'Poppins', sans-serif;
  color: #2b4893;
  white-space: nowrap;
  cursor: pointer;
  text-decoration: none;
  border: 3px solid #d1defe;
  letter-spacing: 0.2rem;

  &:hover {
    border: none;
  }
`;

export const MenuButton = styled(Button)`
  background-color: #d1defe;
  font-size: 1.3rem;
  border-radius: 50px;
  padding: 0.5rem 1rem;
  width: 15rem;

  &:hover {
    background-color: ${({ rejectedBgColor }) =>
      rejectedBgColor ? '#f5a979' : '#c5fac9'};
  }

  @media (max-width: 700px) {
    width: 10rem;
    font-size: 1rem;
  }

  @media (max-width: 440px) {
    width: 7rem;
    font-size: 0.7rem;
  }

  @media (max-width: 340px) {
    width: 6rem;
    font-size: 0.5rem;
  }
`;

export const LargeButton = styled(Button)`
  background: transparent;
  font-size: 2rem;
  border-radius: 10px;
  padding: 1rem;
  margin: 1rem;
  width: 400px;
  height: 200px;

  &:hover {
    background-color: aliceblue;
  }

  @media (max-width: 700px) {
    width: 10rem;
    height: 5rem;
    font-size: 1rem;
  }
`;
