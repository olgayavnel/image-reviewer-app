import styled from 'styled-components';

const Button = styled.button`
  font-family: 'Poppins', sans-serif;
  color: #2b4893;
  white-space: nowrap;
  cursor: pointer;
  text-decoration: none;
  border: 3px solid #d1defe;
`;

export const MenuButton = styled(Button)`
  background-color: #d1defe;
  border-radius: 50px;
  padding: 0.5rem 1rem;
  max-width: 200px;
  font-size: 0.8rem;
  letter-spacing: 0.2rem;

  &:hover {
    background-color: ${({ rejectedBgColor }) =>
      rejectedBgColor ? '#f5a979' : '#c5fac9'};
    border: ${({ rejectedBorderColor }) =>
      rejectedBorderColor ? '3px solid #f5a979' : '3px solid #c5fac9'};
  }

  @media (max-width: 660px) {
    max-width: 80%;
    font-size: 0.8rem;
    letter-spacing: 0.1rem;
  }
`;

export const LargeButton = styled(Button)`
  background: transparent;
  border-radius: 10px;
  padding: 1rem;
  margin: 1rem;
  font-size: 2rem;
  width: 200px;
  height: 200px;

  &:hover {
    background-color: aliceblue;
    border: none;
  }
`;
