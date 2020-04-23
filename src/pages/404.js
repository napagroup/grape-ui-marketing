import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import PageNotFound from '../images/PageNotFound.svg';
import '../containers/404/styles.css';

const NotFoundPage = () => (
  <Layout>
    <PageNotFound />
    <SEO title="404: Not found" />
  </Layout>
);

export default NotFoundPage;
