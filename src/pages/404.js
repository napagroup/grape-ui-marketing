import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';

const NotFoundPage = () => (
  <Layout>
    <img
      alt="404"
      src="https://illustatus.herokuapp.com/?title=Oops,%20Page%20not%20found&fill=%840b55ed"
    />
    <SEO title="404: Not found" />
  </Layout>
);

export default NotFoundPage;
