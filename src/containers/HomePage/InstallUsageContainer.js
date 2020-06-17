import { Link } from 'gatsby';
import {
  Box,
  Button,
  Card,
  CodeBlock,
} from 'grape-ui-react';
import React from 'react';
import urlRoutes from '../../components/constants';

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
  <Box py={[3, 4, 5]}>
    <Card
      cardBody={(
        <CodeBlock
          codeString="npm i grape-ui-react"
          language="bash"
          my="initial"
        />
      )}
      cardSubtitle="Install grape-ui-react via npm"
      cardTitle="Installation"
      maxWidth={400}
      mx="auto"
      width={1}
    />
    <Card
      cardActions={(
        <Link to={urlRoutes.docsPage}>
          <Button
            bg="brandPrimary"
            bgActiveColor="brandPrimary.dark"
            bgHoverColor="brandPrimary.light"
            color="white"
            width={1}
          >
            Learn More
          </Button>
        </Link>
      )}
      cardBody={(
        <CodeBlock
          codeString={usageExample}
          my="initial"
        />
      )}
      cardTitle="Usage"
      maxWidth={400}
      mx="auto"
      width={1}
    />
  </Box>
);

export default InstallUsageContainer;
