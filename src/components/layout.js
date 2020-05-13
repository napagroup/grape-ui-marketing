/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import { Box, Flex } from 'grape-ui-react';
import { ThemeProvider } from 'styled-components';
import { Reset } from 'styled-reset';

import Header from './Header';
import Footer from './Footer';
import Loader from './Loader';

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  const themeMain = {
    main: 'medusagreen',
  };

  return (
    <Loader>
      <ThemeProvider theme={themeMain}>
        <Flex
          flexDirection="column"
          minHeight="100vh"
        >
          <Header siteTitle={data.site.siteMetadata.title} />
          <Reset />
          <Box
            flex={1}
            mt="1px"
          >
            {children}
          </Box>
          <Footer />
        </Flex>
      </ThemeProvider>
    </Loader>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
