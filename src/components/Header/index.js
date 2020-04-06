import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'gatsby';
import {
  Box,
  Button,
  Flex,
  Image,
  Text,
} from 'grape-ui-react';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import urlRoutes from '../constants';
import logo from '../../images/grape-ui-header-logo.svg';

const HeaderFlex = styled(Flex)`
  border-bottom: 1px solid #CB27A8;
  box-shadow: 0 1px 0 #840B55;
`;

HeaderFlex.defaultProps = {
  justifyContent: 'space-between',
  mb: '1px',
  px: [2, 3, 4, 5],
  py: [1, null, 2],
};

const Header = ({ siteTitle }) => (
  <HeaderFlex>
    <Flex alignItems="center">
      <Box maxWidth={175}>
        <Link to={urlRoutes.homePage}>
          <Image alt={siteTitle} src={logo} />
        </Link>
      </Box>
      <Link to={urlRoutes.docsPage}>
        <Button color="black">DOCS</Button>
      </Link>
    </Flex>
    <Flex alignItems="center">
      <Box mx={1} px={3}>
        <Text>v0.9.0</Text>
      </Box>
      <Button href={urlRoutes.externalGithub}>
        <FontAwesomeIcon icon={faGithub} />
      </Button>
      <Button href={urlRoutes.externalTwitter}>
        <FontAwesomeIcon icon={faTwitter} />
      </Button>
      <Link to={urlRoutes.docsPage}>
        <Button color="brandPrimary">Getting Started</Button>
      </Link>
    </Flex>
  </HeaderFlex>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: '',
};

export default Header;
