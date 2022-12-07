import React, {FC} from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {colors} from '../../theme';
import {Txt} from '../typography';

interface IProps {
  onPress: () => void;
  textContent: string;
}
export const PrimaryButton: FC<IProps> = ({onPress, textContent}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.6}
      style={styles.container}>
      <Txt mod="lg" color="#FFFF">
        {textContent}
      </Txt>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    padding: 15,
    width: '100%',
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
