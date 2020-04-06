import React from 'react';
import PropTypes from 'prop-types';
import Highlight, { defaultProps } from 'prism-react-renderer';
import './prism-theme-grape.css';

const CodeBlock = (props) => {
  const { code, language } = props;
  return (
    <Highlight {...defaultProps} code={code} language={language} theme={undefined}>
      {({
        className,
        getLineProps,
        getTokenProps,
        tokens,
      }) => (
        <pre className={className}>
          {tokens.map((line, i) => (
            <div {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );
};

CodeBlock.propTypes = {
  code: PropTypes.string,
  language: PropTypes.string,
};

CodeBlock.defaultProps = {
  code: '',
  language: 'jsx',
};

export default CodeBlock;
