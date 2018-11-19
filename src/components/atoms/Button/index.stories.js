import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';
import Button from '.';

storiesOf('Button', module)
  .add('default', withInfo({ text: 'Add text description here' })(() => (
    <Button onClick={action('clicked')}>Hello</Button>
  )))
  .add('large', withInfo({})(() => (
    <Button large onClick={action('clicked')}>Hello</Button>
  )))
  .add('small', withInfo({})(() => (
    <Button small onClick={action('clicked')}>Hello</Button>
  )))
  .add('disabled', withInfo({})(() => (
    <Button disabled onClick={action('clicked')}>Hello</Button>
  )))
