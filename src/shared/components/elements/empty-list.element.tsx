import React, {FC} from 'react';
import {View} from 'react-native';
import {Txt} from '../typography';

export const EmptyList: FC = () => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Txt mod="xl" color={'#FFFF'}>
        List is empty
      </Txt>
    </View>
  );
};
