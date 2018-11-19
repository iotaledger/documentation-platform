import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import Link from '.';

storiesOf('Link', module)
  .add('default', withInfo({})(() =>
    <Link href="https://iota.org" text="IOTA Foundation" />
  ))
