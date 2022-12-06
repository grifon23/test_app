import React, {FC} from 'react';
import {Text, StyleSheet, TextStyle, TextProps} from 'react-native';

const sizes = {
  es: 10,
  sm: 12,
  md: 14,
  lg: 18,
  xl: 22,
};

const lineHeights = {
  es: 16,
  sm: 18,
  md: 22,
  lg: 28,
  xl: 34,
};

export interface TxtProps extends TextProps {
  children: any;
  style?: TextStyle | TextStyle[];
  color?: string;
  mod?: keyof typeof sizes;
  numberOfLines?: number;
}

export const Txt: FC<TxtProps> = ({
  children,
  style = {},
  mod = 'md',
  color,
  ...props
}) => {
  return (
    <Text
      {...props}
      style={[
        {
          ...styles.text,
          color: color,
          fontSize: sizes[mod],
          lineHeight: lineHeights[mod],
        },
        style,
      ]}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {},
});
