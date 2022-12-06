import React, {FC} from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import {colors, Txt} from '../../../shared';
interface IProps {
  title: string;
  imgUrl: string;
  description: string;
  onPress: () => void;
}
export const AnimalItem: FC<IProps> = ({
  title,
  imgUrl,
  description,
  onPress,
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={onPress}
      style={styles.container}>
      <Image source={{uri: imgUrl}} style={styles.image} />
      <View style={styles.info}>
        <Txt mod="lg" color={colors.white}>
          {title}
        </Txt>
        <Txt mod="sm" color={colors.secondaryTxt}>
          {description}
        </Txt>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: colors.prymary,
    borderRadius: 20,
  },
  image: {height: 45, width: 60, borderRadius: 10},
  info: {marginLeft: 20},
});
