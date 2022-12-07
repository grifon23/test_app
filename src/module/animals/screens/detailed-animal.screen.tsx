import {useRoute} from '@react-navigation/native';
import React, {FC, useEffect, useState} from 'react';
import {
  ActivityIndicator,
  Alert,
  Dimensions,
  Image,
  Linking,
  StyleSheet,
  View,
} from 'react-native';
import {getDetailedAnimalReq} from '../../../api/animals';
import {colors, ScreenLayout, Txt} from '../../../shared';
import {Loader} from '../../../shared/components/loader/loader';
import {IAnimal} from '../../../typing/interfaces/entity/animals';

const SCREEN_HEIGHT = Dimensions.get('screen').height;

export const DetailedAnimalScreen: FC = () => {
  const route: any = useRoute();
  const [animal, setAnimal] = useState<IAnimal>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const loadAnimal = async (id: number) => {
    setIsLoading(true);
    try {
      const {data} = await getDetailedAnimalReq(id);
      setAnimal(data);
    } catch (error) {}
    setIsLoading(false);
  };

  useEffect(() => {
    loadAnimal(route.params?.id);
  }, [route.params?.id]);

  const linking = async (url: any) => {
    const canOpen = await Linking.canOpenURL(`${url}`);

    Linking.openURL(url).catch(error => {
      console.log('error download', error);
      Alert.alert('Unknow arror');
    });
  };

  if (isLoading) return <Loader />;
  return (
    <ScreenLayout paddingHorizontal={16}>
      <View style={{height: SCREEN_HEIGHT * 0.3, marginVertical: 20}}>
        <Image
          source={{uri: animal?.image}}
          style={{height: '100%', width: '100%', borderRadius: 20}}
          resizeMode="cover"
        />
      </View>
      <Txt mod="xl" color={colors.white}>
        {animal?.title}
      </Txt>
      <Txt mod="lg" color={colors.white}>
        {animal?.text}
      </Txt>
      <Txt
        onPress={() => linking(animal?.url)}
        mod="sm"
        color={colors.secondaryTxt}>
        {animal?.url}
      </Txt>
    </ScreenLayout>
  );
};
