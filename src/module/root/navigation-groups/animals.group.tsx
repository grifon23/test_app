import {
  createStackNavigator,
  StackNavigationOptions,
} from '@react-navigation/stack';
import React from 'react';
import {colors} from '../../../shared';
import {RouteKey} from '../../../typing/enums/routes.enum';
import {
  AnimalsScreen,
  DetailedAnimalScreen,
  EditorAnimalsScreen,
} from '../../animals';

const Stack = createStackNavigator();

export const AnimalsNavigationGroup = () => {
  const optionsScreen: StackNavigationOptions = {
    headerShown: true,
    headerStyle: {backgroundColor: colors.background, borderBottomWidth: 0},
    headerTitle: '',
    headerTintColor: colors.white,
    headerBackTitle: '',
    headerShadowVisible: false,
  };
  return (
    <Stack.Navigator
      initialRouteName={RouteKey.AnimalsList}
      screenOptions={{
        headerShown: false,
        cardStyle: {backgroundColor: colors.background},
      }}>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name={RouteKey.AnimalsList}
        component={AnimalsScreen}
      />
      <Stack.Screen
        name={RouteKey.DetailedAnimal}
        component={DetailedAnimalScreen}
        options={optionsScreen}
      />
      <Stack.Screen
        name={RouteKey.EditorAnimal}
        component={EditorAnimalsScreen}
        options={optionsScreen}
      />
    </Stack.Navigator>
  );
};
