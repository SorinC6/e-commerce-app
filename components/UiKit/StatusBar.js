// @flow

import React from 'react';
import {StatusBar as NativeStatusBar} from 'react-native';

import type {ComponentType} from 'react';

const StatusBar = ({type}) => {
  const backgroundColor = type === 'dark' ? 'grey' : '#f4511e';
  const barStyle = type === 'dark' ? 'light-content' : 'dark-content';

  return (
    <NativeStatusBar barStyle={barStyle} backgroundColor={backgroundColor} />
  );
};

type ExternalProps = {
  type: 'dark' | 'light',
};

export default (StatusBar: ComponentType<ExternalProps>);
