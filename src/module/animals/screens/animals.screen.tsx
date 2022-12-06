import {useNavigation} from '@react-navigation/native';
import React, {FC, useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import {getListAnimalsReq} from '../../../api/animals';
import {ScreenLayout} from '../../../shared/components/layouts';
import {Loader} from '../../../shared/components/loader/loader';
import {Animals} from '../../../typing/entity/animals';
import {AnimalsList} from '../components';

export const AnimalsScreen: FC = ({navigation}: any) => {
  const [isLoading, setIsLoading] = useState(false);
  const [animals, setAnimals] = useState<Animals[]>([]);

  const nav: any = useNavigation();

  const loadAnimals = async () => {
    setIsLoading(true);
    try {
      const {data} = await getListAnimalsReq();
      setAnimals(data);
    } catch (error: any) {
      console.log('error animals', error.response.data);
    }
    setIsLoading(false);
  };
  useEffect(() => {
    loadAnimals();
  }, []);
  const goDetailedAnimal = (id: number) => {
    navigation.navigate('detailed-animal', {id});
  };
  if (isLoading) return <Loader />;
  return (
    <ScreenLayout>
      <AnimalsList
        isLoading={isLoading}
        data={animals}
        onPressAnimal={goDetailedAnimal}
      />
    </ScreenLayout>
  );
};
