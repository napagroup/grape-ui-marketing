import { Flex, Link, Paragraph } from 'grape-ui-react';
import React from 'react';
import styled from 'styled-components';
import urlRoutes from '../constants';

const FooterFlex = styled(Flex)``;

FooterFlex.defaultProps = {
  alignItems: 'center',
  background: '#dbdbdb',
  flexWrap: 'wrap',
  justifyContent: 'center',
  p: [1, 2, 3],
};

const FooterParagraph = styled(Paragraph)`
  white-space: nowrap;
`;

FooterParagraph.defaultProps = {
  m: 0,
  mx: 1,
  sm: true,
  textAlign: 'center',
};

const Footer = () => (
  <FooterFlex>
    <FooterParagraph>
      {'grape-ui created by '}
      <Link href={urlRoutes.externalNapa}>Napa Group LLC</Link>
      .
    </FooterParagraph>
    <FooterParagraph>
      {'Documentation created with '}
      <Link href={urlRoutes.externalReactStyleguidist}>React Styleguidist</Link>
      .
    </FooterParagraph>
    <FooterParagraph>
      {'Site generated with '}
      <Link href={urlRoutes.externalGatsby}>Gatsby</Link>
      .
    </FooterParagraph>
  </FooterFlex>
);

export default Footer;
