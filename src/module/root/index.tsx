import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {AnimalsNavigationGroup} from './navigation-groups/animals.group';

export const Navigation = () => {
  return (
    <NavigationContainer>
      <AnimalsNavigationGroup />
    </NavigationContainer>
  );
};
