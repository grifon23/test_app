import {useIsFocused, useNavigation} from '@react-navigation/native';
import React, {FC, useEffect, useState} from 'react';
import {getListAnimalsReq, removeAnimalReq} from '../../../api/animals';
import {ActionButton} from '../../../shared';
import {ScreenLayout} from '../../../shared/components/layouts';
import {Loader} from '../../../shared/components/loader/loader';
import {IAnimal} from '../../../typing/entity/animals';
import {RouteKey} from '../../../typing/enums/routes.enum';
import {AnimalsList} from '../components';

export const AnimalsScreen: FC = ({navigation}: any) => {
  const [isLoading, setIsLoading] = useState(false);
  const isFocused = useIsFocused();
  const [animals, setAnimals] = useState<IAnimal[]>([]);

  const loadAnimals = async () => {
    setIsLoading(true);
    try {
      const {data} = await getListAnimalsReq();
      setAnimals(data);
      console.log('data list', data.length);
    } catch (error: any) {
      console.log('error animals', error.response.data);
    }
    setIsLoading(false);
  };
  useEffect(() => {
    loadAnimals();
  }, [isFocused]);
  const goDetailedAnimal = (id: number) => {
    navigation.navigate(RouteKey.DetailedAnimal, {id});
  };

  const removeAnimal = async (id: number) => {
    await removeAnimalReq(id);
    setAnimals(() => animals.filter(el => el.id !== id));
  };
  let swipeRef: Array<any> = [];
  let prevOpenedRow;
  const closeSwipeItem = (id: number) => {
    prevOpenedRow = swipeRef[id];
    if (prevOpenedRow && prevOpenedRow === swipeRef[id]) {
      prevOpenedRow.close();
    }
  };
  const editAnimal = async (id: number) => {
    closeSwipeItem(id);
    navigation.navigate(RouteKey.EditorAnimal, {id});
  };
  if (isLoading) {
    return <Loader />;
  }
  return (
    <ScreenLayout>
      <AnimalsList
        swipeRef={swipeRef}
        removeAnimal={removeAnimal}
        editAnimal={editAnimal}
        isLoading={isLoading}
        data={animals}
        onPressAnimal={goDetailedAnimal}
      />
      <ActionButton
        onPress={() => navigation.navigate(RouteKey.EditorAnimal)}
      />
    </ScreenLayout>
  );
};
