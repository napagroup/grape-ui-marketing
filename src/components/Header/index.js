import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'gatsby';
import {
  Box,
  Button,
  Flex,
  Text,
  Toolbar,
} from 'grape-ui-react';
import PropTypes from 'prop-types';
import React from 'react';
import Logo from '../../images/grape-ui-header-logo.svg';
import urlRoutes from '../constants';
import packageJson from '../../../package.json';

const leftArea = (siteTitle) => (
  <Flex alignItems="center" flexDirection={['column', 'row']}>
    <Box maxWidth={175}>
      <Link title={siteTitle} to={urlRoutes.homePage}>
        <Logo />
      </Link>
    </Box>
    <Link to={urlRoutes.docsPage}>
      <Button color="black">
        DOCS
      </Button>
    </Link>
  </Flex>
);

const rightArea = (version) => (
  <Flex alignItems="center">
    <Box mx={1} px={[1, 2, 3]}>
      <Text>
        {`v${version}`}
      </Text>
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
);

const Header = ({ siteTitle }) => (
  <Toolbar
    borderBottom="1px solid rgb(203, 39, 168)"
    boxShadow="rgb(132, 11, 85) 0px 1px 0px"
    leftArea={leftArea(siteTitle)}
    minHeight={null}
    px={[2, 3, 4, 5]}
    py={2}
    rightArea={rightArea(packageJson.version)}
    toolbarInnerProps={{
      alignItems: 'center',
      flexDirection: ['column', 'row'],
      maxWidth: 'none',
      width: 1,
    }}
  />
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: '',
};

export default Header;
