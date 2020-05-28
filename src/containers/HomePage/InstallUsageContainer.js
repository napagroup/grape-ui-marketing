import { Link } from 'gatsby';
import {
  Box,
  Button,
  CodeBlock,
  Flex,
  Header,
  Paragraph,
} from 'grape-ui-react';
import React from 'react';
import styled from 'styled-components';
import urlRoutes from '../../components/constants';

const GrayBox = styled(Box)``;

GrayBox.defaultProps = {
  boxSizing: 'border-box',
  maxWidth: 480,
  mb: [2, 0],
  mx: 'auto',
  width: 1,
};

const usageExample = `
import React from 'react';
import { Paragraph } from 'grape-ui-react';

const App = () => {
  return (
    <div className="App">
      <Paragraph>
        grape-ui is Groovy
      </Paragraph>
    </div>
  )
};

export default App;
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
        <Header.h2>
          Installation
        </Header.h2>
        <Paragraph>
          Install grape-ui-react via npm
        </Paragraph>
        <CodeBlock
          codeString="npm i grape-ui-react"
          language="bash"
          my="initial"
          mb={4}
        />
        <Header.h2>
          Usage
        </Header.h2>
        <CodeBlock
          codeString={usageExample}
          my="initial"
          mb={4}
        />
        <Link to={urlRoutes.docsPage}>
          <Button color="brandPrimary" width={1}>
            Learn More
          </Button>
        </Link>
      </GrayBox>
    </Flex>
  </Box>
);

export default InstallUsageContainer;
