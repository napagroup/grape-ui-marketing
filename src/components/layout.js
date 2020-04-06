/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import { ThemeProvider } from 'styled-components';
import { Reset } from 'styled-reset';

import Header from './Header';
import Footer from './Footer';

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
    <>
      <ThemeProvider theme={themeMain}>
        <Header siteTitle={data.site.siteMetadata.title} />
        <Reset />
        <main>{children}</main>
        <Footer />
      </ThemeProvider>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
