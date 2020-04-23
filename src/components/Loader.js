import { useEffect, useState } from 'react';
import { PropTypes } from 'prop-types';

const Loader = (props) => {
  const { children } = props;
  const [isLoading, setLoading] = useState(true);
  useEffect(() => { setLoading(false); }, []);
  return isLoading ? null : children;
};

Loader.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Loader;
