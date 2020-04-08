import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import HomePageJumbotron from '../containers/HomePage/HomePageJumbotron';
import InstallUsageContainer from '../containers/HomePage/InstallUsageContainer';

const IndexPage = () => (
  <Layout>
    <SEO
      title="grape-ui: react framework built on the best out there"
      useTitleTemplate={false}
    />
    <HomePageJumbotron />
    <InstallUsageContainer />
  </Layout>
);

export default IndexPage;
