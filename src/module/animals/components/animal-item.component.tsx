import React, {FC} from 'react';
import {
  Animated,
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {colors, Txt} from '../../../shared';
import Swipeable from 'react-native-gesture-handler/Swipeable';
interface IProps {
  title: string;
  imgUrl: string;
  description: string;
  onPress: () => void;
  swipeLeft: () => void;
  swipeRight: () => void;
  id: number;
  swipeRef: any;
}
export const AnimalItem: FC<IProps> = ({
  swipeRef,
  title,
  imgUrl,
  description,
  onPress,
  swipeLeft,
  swipeRight,
  id,
}) => {
  const rightSwipe = (progress: any, dragX: any) => {
    const progr = progress;
    const trans = dragX.interpolate({
      inputRange: [0, 50, 50, 101],
      outputRange: [-5, 0, 0, 1],
    });
    return (
      <Animated.View
        style={[
          styles.rightSwipe,
          {
            transform: [{translateX: trans}],
          },
        ]}>
        <Txt style={{color: '#FFFFFF', fontSize: 18, fontWeight: '600'}}>
          Delete
        </Txt>
      </Animated.View>
    );
  };
  const leftSwipe = (progress: any, dragX: any) => {
    const trans = dragX.interpolate({
      inputRange: [0, 50, 100, 101],
      outputRange: [0, 0, 15, 0],
    });
    return (
      <Animated.View
        style={[
          styles.leftSwipe,
          {
            transform: [{translateX: trans}],
            paddingLeft: 8,
            paddingRight: 9,
          },
        ]}>
        <Txt style={{color: '#FFFFFF', fontSize: 18, fontWeight: '600'}}>
          Edit
        </Txt>
      </Animated.View>
    );
  };

  return (
    <Swipeable
      useNativeAnimations
      ref={ref => (swipeRef[id] = ref)}
      renderRightActions={rightSwipe}
      renderLeftActions={leftSwipe}
      overshootRight={false}
      overshootLeft={false}
      onSwipeableRightOpen={swipeRight}
      onSwipeableLeftOpen={swipeLeft}
      rightThreshold={100}
      leftThreshold={100}
      activeOffsetX={[-30, 30]}
      failOffsetY={[-30, 30]}>
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
    </Swipeable>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: colors.primary,
    borderRadius: 20,
  },
  image: {height: 50, width: 65, borderRadius: 10},
  info: {marginLeft: 20},
  rightSwipe: {
    backgroundColor: '#d14343',
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopRightRadius: 15,
    borderBottomRightRadius: 15,
  },
  leftSwipe: {
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopLeftRadius: 15,
    borderBottomLeftRadius: 15,
    backgroundColor: '#3791E4',
  },
});
