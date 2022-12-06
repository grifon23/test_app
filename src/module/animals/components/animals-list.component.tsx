import React, {FC, useCallback} from 'react';
import {FlatList, ListRenderItem, View} from 'react-native';
import {AnimalItem} from './animal-item.component';
interface IProps {
  data: any[];
  isLoading: boolean;
  onPressAnimal: (id: number) => void;
}
export const AnimalsList: FC<IProps> = ({data, isLoading, onPressAnimal}) => {
  const renderItem: ListRenderItem<any> = ({item: it}) => {
    return (
      <AnimalItem
        onPress={() => onPressAnimal(it.id)}
        title={it.title}
        imgUrl={it.image}
        description={it.text}
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
    />
  );
};
