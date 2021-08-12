import styled from 'styled-components';

const Button = styled.button`
  font-family: 'Poppins', sans-serif;
  color: #2b4893;
  white-space: nowrap;
  cursor: pointer;
  text-decoration: none;
  border: 3px solid #d1defe;
  letter-spacing: 0.2rem;
`;

export const MenuButton = styled(Button)`
  background-color: #d1defe;
  font-size: 1.3rem;
  border-radius: 50px;
  padding: 0.5rem 1rem;
  width: min(15rem 100px);
  font-size: clamp(1rem, 1vw, 2.8rem);

  &:hover {
    background-color: ${({ rejectedBgColor }) =>
      rejectedBgColor ? '#f5a979' : '#c5fac9'};
    border: ${({ rejectedBorderColor }) =>
      rejectedBorderColor ? '3px solid #f5a979' : '3px solid #c5fac9'};
  }
`;

export const LargeButton = styled(Button)`
  background: transparent;
  border-radius: 10px;
  padding: 1rem;
  margin: 1rem;
  background-color: green;
  font-size: 2vw;
  width: 200px;
  height: 200px;

  &:hover {
    background-color: aliceblue;
    border: none;
  }
`;
