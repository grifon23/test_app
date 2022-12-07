import React, {FC} from 'react';
import {TouchableOpacity, Image, StyleSheet} from 'react-native';
import {colors} from '../../theme';

interface IProps {
  onPress: () => void;
}

export const ActionButton: FC<IProps> = ({onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Image
        source={require('../../../assets/images/plus.png')}
        style={styles.img}
      />
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    borderRadius: 100,
    height: 60,
    width: 60,
    backgroundColor: colors.darkerBackground,
    position: 'absolute',
    bottom: 40,
    right: 30,
    alignItems: 'center',
    justifyContent: 'center',
    opacity: 0.7,
  },
  img: {
    height: 57,
    width: 57,
  },
});
