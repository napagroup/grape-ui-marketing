import { Link } from 'gatsby';
import {
  Box,
  Button,
  Flex,
  Header,
  Link as GrapeLink,
  Paragraph,
  Text,
} from 'grape-ui-react';
import React from 'react';
import styled from 'styled-components';
import CodeBlock from '../../components/CodeBlock';
import urlRoutes from '../../components/constants';

const GrayBox = styled(Box)`
  background: #fafafa;
  border-radius: 4px;
  box-sizing: border-box;
`;

GrayBox.defaultProps = {
  mb: [2, 0],
  mx: [null, 1],
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

const InstallUsageContainer = () => (
  <Box py={[2, 3, 4, 5]}>
    <Flex
      alignItems="flex-start"
      flexDirection={['column', 'row']}
      maxWidth={960}
      mx="auto"
      style={{ boxSizing: 'border-box' }}
      width={[19 / 20, null, null, 1]}
    >
      <GrayBox>
        <Header.h2 textAlign="center">Installation</Header.h2>
        <Paragraph>
          <Text fontWeight="bold">Step 1:</Text>
          {' Install '}
          <GrapeLink href={urlRoutes.externalStyledComponents}>styled-components</GrapeLink>
          {' via npm'}
        </Paragraph>
        <CodeBlock code={installStepOne} language="bash" />
        <Paragraph>
          <Text fontWeight="bold">Step 2:</Text>
          {' Install grape-ui via npm'}
        </Paragraph>
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
  </Box>
);

export default InstallUsageContainer;
