import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.div`
  background-color: blanchedalmond;
  border-radius: 10px;
  border-bottom: 1px solid white;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const FooterCopy = styled.p``;

function Footer() {
  return (
    <FooterWrapper>
      <FooterCopy>
        Click on the + in order to get image recommendations
      </FooterCopy>
    </FooterWrapper>
  );
}

export default Footer;
