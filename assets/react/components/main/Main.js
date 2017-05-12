import React from 'react';
import PropTypes from 'prop-types';

const Main = props => (
  <div>
    {React.cloneElement(props.children, props)}
  </div>
);

Main.propTypes = {
  children: PropTypes.node,
};

Main.defaultProps = {
  children: null,
};

export default Main;
