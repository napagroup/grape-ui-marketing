import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy } from '@fortawesome/free-regular-svg-icons';
import { Link } from 'gatsby';
import {
  Box,
  Button,
  Flex,
  Header,
  Image,
  Link as GrapeLink,
  Paragraph,
  Text,
} from 'grape-ui-react';
import React, { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import styled from 'styled-components';
import CodeBlock from '../components/CodeBlock';
import urlRoutes from '../components/constants';
import Layout from '../components/layout';
import SEO from '../components/seo';
import logo from '../images/logo.svg';
import logoText from '../images/logo-text.svg';

const Jumbotron = styled(Flex)`
  background-color: #242424;
`;

Jumbotron.defaultProps = {
  justifyContent: 'center',
  py: [2, 3, 4, 5],
};

const CallToActionButton = styled(Button)`
  text-transform: none;
`;

CallToActionButton.defaultProps = {
  bg: 'black.dark',
  bgActiveColor: 'black.light',
  bgHoverColor: 'black',
  border: '1px solid white',
  color: 'white',
  fontFamily: 'monospace',
  lg: true,
  outline: true,
};

const GrayBox = styled(Box)`
  background: #fafafa;
  border-radius: 4px;
`;

GrayBox.defaultProps = {
  mx: [1, 2, 3, 4],
  px: [1, 2, 3, 4],
  py: [1, 2, 3],
  width: [1, 1 / 2],
};

const installStepOne = 'npm install styled-components';
const installStepTwo = 'npm install grape-ui-react';

const usageExample = `
import React from ‘react’;
import { ThemeProvider } from ‘styled-components’;
import { Paragraph } from 'grape-ui-react';

const appTheme = {
  fonts: {
    base: '"Arial", sans-serif',
  },
  space: [0, 8, 16, 32, 64, 128],
};

const App = () => {
  return (
    <div className="App">
      <ThemeProvider theme={appTheme}>
        <Paragraph>grape-ui is Groovy</Paragraph>
      </ThemeProvider>
    </div>
  )
};

default export App;
`;

const IndexPage = () => {
  const [copied, setCopied] = useState(false);
  function isCopied() {
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  }
  return (
    <Layout>
      <SEO title="grape-ui: react framework built on the best out there" useTitleTemplate={false} />
      <Jumbotron>
        <Box maxWidth={187.12} mx={[1, 2, 3, 4]}>
          <Image alt="grapeui logo" src={logo} />
        </Box>
        <Box maxWidth={500} mx={[1, 2, 3, 4]}>
          <Box maxWidth={136} my={[1, 2, 3]}>
            <Image alt="grapeui logo" src={logoText} />
          </Box>
          <Paragraph color="white" lead>
            The responsive react UI framework built upon styled components, styled system, and open source components.
          </Paragraph>
          <CopyToClipboard onCopy={() => isCopied()} text="npm i grape-ui-react">
            <CallToActionButton>
              <Flex flexDirection="column">
                <Text fontFamily="monospace">
                  <Text color="pink" fontFamily="monospace">npm i</Text>
                  {' grape-ui-react'}
                </Text>
                <Text fontFamily="monospace" sm>
                  <FontAwesomeIcon icon={faCopy} />
                  {copied ? ' copied!' : ' copy to clipboard'}
                </Text>
              </Flex>
            </CallToActionButton>
          </CopyToClipboard>
        </Box>
      </Jumbotron>
      <Flex
        alignItems="flex-start"
        maxWidth={960}
        mx="auto"
        my={[2, 3, 4, 5]}
        width={1}
      >
        <GrayBox>
          <Header.h2 textAlign="center">Installation</Header.h2>
          <Text>
            <Text fontWeight="bold">Step 1:</Text>
            {' Install '}
            <GrapeLink href={urlRoutes.externalStyledComponents}>styled-components</GrapeLink>
            {' via npm'}
          </Text>
          <CodeBlock code={installStepOne} language="bash" />
          <Text>
            <Text fontWeight="bold">Step 2:</Text>
            {' Install grape-ui via npm'}
          </Text>
          <CodeBlock code={installStepTwo} language="bash" />
          <hr />
          <Link to={urlRoutes.docsPage}>
            <Button color="black" width={1}>
              Install Docs
            </Button>
          </Link>
        </GrayBox>
        <GrayBox>
          <Header.h2 textAlign="center">Usage</Header.h2>
          <CodeBlock code={usageExample} />
          <hr />
          <Link to={urlRoutes.docsPage}>
            <Button color="black" width={1}>
              Learn More
            </Button>
          </Link>
        </GrayBox>
      </Flex>
    </Layout>
  );
};

export default IndexPage;
