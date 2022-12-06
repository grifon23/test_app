/* eslint-disable prettier/prettier */
import React, {FC} from 'react';
import {
  StatusBar,
  SafeAreaView,
  StyleSheet,
  StatusBarStyle,
  View,
} from 'react-native';
import {colors} from '../../theme';

interface IProps {
  children: JSX.Element | JSX.Element[];
  backgroundStatusBar?: string;
  paddingHorizontal?: number;
  backgroundColor?: string;
  themeStatusBar?: StatusBarStyle;
}
export const ScreenLayout: FC<IProps> = ({
  children,
  backgroundStatusBar = colors.background,
  paddingHorizontal = 10,
  backgroundColor = colors.background,
  themeStatusBar = 'dark-content',
}) => {
  return (
    <SafeAreaView
      style={[styles.container, {paddingHorizontal, backgroundColor}]}>
      <StatusBar
        barStyle={themeStatusBar}
        backgroundColor={backgroundStatusBar}
      />

      <View style={{paddingHorizontal: paddingHorizontal}}>{children}</View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
});
