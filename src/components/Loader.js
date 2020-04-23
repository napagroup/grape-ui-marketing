import { useEffect, useState } from 'react';
import { PropTypes } from 'prop-types';

const Loader = (props) => {
  const { children } = props;
  const [isLoading, setLoading] = useState(true);
  // This forces a rerender to ensure the page is fully rendered.  It is essentially componentDidMount.  It will make sure the styling is applied before the page is rendered.
  useEffect(() => { setLoading(false); }, []);
  return isLoading ? null : children;
};

Loader.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Loader;
