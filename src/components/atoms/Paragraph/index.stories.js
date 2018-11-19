import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import Paragraph from '.';

storiesOf('Paragraph', module)
  .add('default', withInfo({})(() => (<Paragraph>Lorem ipsum dolor sit amet</Paragraph>)))
