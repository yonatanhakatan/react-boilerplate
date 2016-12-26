import React from 'react';
import cssModules from 'react-css-modules';
import classNames from 'classnames';

import styles from './Test.scss';

const Test = () => {
  const classes = classNames({
    test: true,
  });

  return (
    <div styleName={classes}>
      <span>Test Component</span>
    </div>
  );
};

export default cssModules(Test, styles, { allowMultiple: true });
