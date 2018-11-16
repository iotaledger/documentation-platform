import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';
import Button from '../components/Button';

storiesOf('Button', module)
  .add('with text', withInfo({
      text: 'Add text description here',
    })(() => (
    <Button onClick={action('clicked')}>Hello</Button>
  )));
