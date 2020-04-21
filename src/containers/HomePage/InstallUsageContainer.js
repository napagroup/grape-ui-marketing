import { Link } from 'gatsby';
import {
  Box,
  Button,
  Flex,
  Header,
  Paragraph,
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
  maxWidth: 480,
  mb: [2, 0],
  mx: 'auto',
  px: [1, 2, 3, 4],
  py: [1, 2, 3],
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
        <Header.h2 textAlign="center">
          Installation
        </Header.h2>
        <Paragraph>
          Install grape-ui-react via npm
        </Paragraph>
        <CodeBlock
          code="npm i grape-ui-react"
          language="bash"
        />
        <Box py={[1, 2, 3, 4]}>
          <hr />
        </Box>
        <Header.h2 textAlign="center">
          Usage
        </Header.h2>
        <CodeBlock code={usageExample} />
        <Box pt={[1, 2, 3, 4]}>
          <hr />
        </Box>
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
