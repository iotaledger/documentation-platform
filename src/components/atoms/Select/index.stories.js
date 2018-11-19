import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';
import Select from '.';

storiesOf('Select', module)
  .add('default', withInfo({})(() => (
    <Select
      label='Please select'
      options={['one', 'two', 'three']}
      selectedOption={'two'}
      onChange={action('clicked')}
      required
    />
  )))
