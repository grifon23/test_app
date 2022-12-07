import React, {FC, useCallback} from 'react';
import {FlatList, ListRenderItem, View} from 'react-native';
import {EmptyList} from '../../../shared';
import {AnimalItem} from './animal-item.component';
interface IProps {
  data: any[];
  isLoading: boolean;
  onPressAnimal: (id: number) => void;
  removeAnimal: (id: number) => void;
  editAnimal: (id: number) => void;
  swipeRef: any;
}
export const AnimalsList: FC<IProps> = ({
  data,
  isLoading,
  onPressAnimal,
  removeAnimal,
  editAnimal,
  swipeRef,
}) => {
  const renderItem: ListRenderItem<any> = ({item: it}) => {
    return (
      <AnimalItem
        swipeRef={swipeRef}
        id={it.id}
        onPress={() => onPressAnimal(it.id)}
        title={it.title}
        imgUrl={it.image}
        description={it.text}
        swipeLeft={() => editAnimal(it.id)}
        swipeRight={() => {
          removeAnimal(it.id);
        }}
      />
    );
  };

  const keyExtractor = useCallback(item => {
    return `${item.id}`;
  }, []);
  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      showsVerticalScrollIndicator={false}
      ItemSeparatorComponent={() => <View style={{height: 20}} />}
      ListEmptyComponent={EmptyList}
    />
  );
};
