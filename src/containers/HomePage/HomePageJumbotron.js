import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy } from '@fortawesome/free-regular-svg-icons';
import {
  Box,
  Button,
  Flex,
  Image,
  Paragraph,
  Text,
} from 'grape-ui-react';
import React, { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import styled from 'styled-components';
import logo from '../../images/logo.svg';
import logoText from '../../images/logo-text.svg';

const Jumbotron = styled(Flex)`
  background-color: #242424;
`;

Jumbotron.defaultProps = {
  flexDirection: ['column', 'row'],
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

const HomePageJumbotron = () => {
  const [copied, setCopied] = useState(false);
  function isCopied() {
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  }
  return (
    <Jumbotron>
      <Box maxWidth={[93.56, 187.12]} mx={['auto', 2, 3, 4]}>
        <Image alt="grapeui logo" src={logo} />
      </Box>
      <Flex alignItems={['center', 'flex-start']} flexDirection="column" justifyContent="center" maxWidth={500} mx={['auto', 2, 3, 4]}>
        <Box maxWidth={136} my={[1, 2, 3]}>
          <Image alt="grapeui logo" src={logoText} />
        </Box>
        <Paragraph color="white" lead mx={[1, 0]}>
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
      </Flex>
    </Jumbotron>
  );
};

export default HomePageJumbotron;
