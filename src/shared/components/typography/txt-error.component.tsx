import _ from 'lodash';
import React, {FC} from 'react';
import {TextStyle} from 'react-native';
import {TxtProps} from './txt.component';
import {Txt} from './txt.component';

interface TxtErrorProps extends TxtProps {
  children: string;
  style?: TextStyle;
}

export const TxtError: FC<TxtErrorProps> = props => {
  if (!props.children) return null;
  return (
    <Txt
      {...props}
      style={{
        color: 'red',
        ...props.style,
      }}
      mod={_.defaultTo(props.mod, 'es')}>
      {props.children}
    </Txt>
  );
};
