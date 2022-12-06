import React, {FC} from 'react';
import {View, ActivityIndicator, StyleSheet} from 'react-native';

export const Loader: FC = () => {
  return (
    <View style={styles.loader}>
      <ActivityIndicator size="large" color={'#FFFF'} />
    </View>
  );
};
const styles = StyleSheet.create({
  loader: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
