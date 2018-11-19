import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import Text from '.';

storiesOf('Text', module)
  .add('default', withInfo({})(() => (<Text>Lorem ipsum dolor sit amet</Text>)))
