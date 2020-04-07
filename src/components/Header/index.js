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
  alignItems: 'center',
  flexDirection: ['column', 'row'],
  justifyContent: 'center',
  mb: '1px',
  px: [2, 3, 4, 5],
  py: [1, null, 2],
};

const Header = ({ siteTitle }) => (
  <HeaderFlex>
    <Box maxWidth={175}>
      <Link to={urlRoutes.homePage}>
        <Image alt={siteTitle} src={logo} />
      </Link>
    </Box>
    <Flex flex={1} justifyContent={['center', 'space-between']} style={{ boxSizing: 'border-box' }} width={[1, 'auto']}>
      <Link to={urlRoutes.docsPage}>
        <Button color="black">DOCS</Button>
      </Link>
      <Box flex={[1, 'none']} />
      <Flex alignItems="center">
        <Box mx={1} px={[1, 2, 3]}>
          <Text>v0.9.0</Text>
        </Box>
        <Button href={urlRoutes.externalGithub} pl={[1, 2]} pr={[1, 2]}>
          <FontAwesomeIcon icon={faGithub} />
        </Button>
        <Button href={urlRoutes.externalTwitter} pl={[1, 2]} pr={[1, 2]}>
          <FontAwesomeIcon icon={faTwitter} />
        </Button>
        <Box display={['none', 'block']}>
          <Link to={urlRoutes.docsPage}>
            <Button color="brandPrimary">Getting Started</Button>
          </Link>
        </Box>
      </Flex>
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
