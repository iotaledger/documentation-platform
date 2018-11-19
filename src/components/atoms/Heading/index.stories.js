import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import Heading from '.';

storiesOf('Heading', module)
  .add('default', withInfo({})(() => (<Heading>Lorem Ipsum</Heading>)))
  .add('with text prop', withInfo({})(() => <Heading text="Lorem Ipsum" />))
  .add('level 1', withInfo({})(() => <Heading level={1} text="Lorem Ipsum" />))
  .add('level 2', withInfo({})(() => (<Heading level={2}>Lorem Ipsum</Heading>)))
  .add('level 3', withInfo({})(() => <Heading level={3} text="Lorem Ipsum" />))
  .add('level 4', withInfo({})(() => <Heading level={4} text="Lorem Ipsum" />))
  .add('level 5', withInfo({})(() => <Heading level={5} text="Lorem Ipsum" />))
  .add('level 6', withInfo({})(() => <Heading level={6} text="Lorem Ipsum" />));
