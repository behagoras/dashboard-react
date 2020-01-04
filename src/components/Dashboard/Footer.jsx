import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.div`
  grid-area: ft;
  margin:auto;
`;
const Footer = () => {

  return (
    <FooterWrapper>
      Made with ❤️ by
      <a href="https://github.com/behagoras" style={{ color: 'var(--color-dark)' }} target="_blank"> David Behar</a>
    </FooterWrapper>
  );
};

export default Footer;
