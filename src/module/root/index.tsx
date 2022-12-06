import React from 'react';
import {
  NavigationContainer,
  StackRouterOptions,
} from '@react-navigation/native';
import {AnimalsScreen, DetailedAnimalScreen} from '../animals';
import {createStackNavigator, StackHeaderProps} from '@react-navigation/stack';
import {colors} from '../../shared';
import {
  StackHeaderOptions,
  StackNavigationOptions,
} from '@react-navigation/stack/lib/typescript/src/types';

const Stack = createStackNavigator();

export const Navigation = () => {
  const options: StackNavigationOptions = {
    headerShown: true,
    headerStyle: {backgroundColor: colors.background, borderBottomWidth: 0},
    headerTitle: '',
    headerTintColor: colors.white,
    headerBackTitle: '',
    headerShadowVisible: false,
  };
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="animals"
        screenOptions={{
          headerShown: false,
          cardStyle: {backgroundColor: colors.background},
        }}>
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="animals"
          component={AnimalsScreen}
        />
        <Stack.Screen
          name="detailed-animal"
          component={DetailedAnimalScreen}
          options={options}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
