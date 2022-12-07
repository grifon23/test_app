import React, {FC} from 'react';
import {
  StatusBar,
  SafeAreaView,
  StyleSheet,
  StatusBarStyle,
  View,
  ViewStyle,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import {colors} from '../../theme';

interface IProps {
  style?: ViewStyle;
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
  style,
}) => {
  return (
    <SafeAreaView
      style={[styles.container, {paddingHorizontal, backgroundColor}]}>
      <StatusBar
        barStyle={themeStatusBar}
        backgroundColor={backgroundStatusBar}
      />
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'position'}
        keyboardVerticalOffset={10}
        style={{
          paddingHorizontal: paddingHorizontal,
          flex: 1,
          paddingBottom: 20,
          ...style,
        }}>
        {children}
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
});
