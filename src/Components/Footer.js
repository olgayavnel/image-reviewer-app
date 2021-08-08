import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.div`
  background-color: blanchedalmond;
  border-bottom: 1px solid white;
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
