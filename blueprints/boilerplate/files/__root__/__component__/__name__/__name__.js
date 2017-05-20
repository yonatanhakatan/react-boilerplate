import React from 'react';
import cssModules from 'react-css-modules';
import classNames from 'classnames';

import styles from './<%= pascalEntityName %>.scss';

const <%= pascalEntityName %> = () => {
  const classes = classNames({
    <%= camelEntityName %>: true,
  });

  return (
    <div styleName={classes}>
      Hello
    </div>
  );
};

export default cssModules(<%= pascalEntityName %>, styles, { allowMultiple: true });
