import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';
import Button from '../components/Button';

storiesOf('Button', module)
  .add('default', withInfo({
      text: 'Add text description here',
    })(() => (
    <Button onClick={action('clicked')}>Hello</Button>
  )))
  .add('large', withInfo({
      text: 'Add text description here',
    })(() => (
    <Button large onClick={action('clicked')}>Hello</Button>
  )))
  .add('small', withInfo({
      text: 'Add text description here',
    })(() => (
    <Button small onClick={action('clicked')}>Hello</Button>
  )))
