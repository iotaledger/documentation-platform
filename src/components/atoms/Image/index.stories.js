import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import Image from '.';

storiesOf('Image', module)
  .add('default', withInfo({})(() =>
    <Image src="https://data.iota.org/static/logotypes/logo-header.svg" alt="IOTA Foundation" />
  ))
