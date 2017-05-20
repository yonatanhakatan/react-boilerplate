import React from 'react';
import { storiesOf } from '@kadira/storybook';
import <%= pascalEntityName %> from '../<%= pascalEntityName %>';

storiesOf('<%= pascalEntityName %>', module)
  .add('regular state', () => (
    <<%= pascalEntityName %> />
  ));
