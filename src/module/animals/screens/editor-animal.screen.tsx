import {useRoute} from '@react-navigation/native';
import {useForm} from 'jet-tools';
import _ from 'lodash';
import React, {FC} from 'react';
import {Dimensions} from 'react-native';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import {PrimaryButton, ScreenLayout, TextField, Txt} from '../../../shared';
import {RouteKey} from '../../../typing/enums/routes.enum';
import {useEditorAnimal} from '../hooks/use-editor-animal.hook';
import {colors} from './../../../shared/theme/colors';

const SCREEN_HEIGHT = Dimensions.get('screen').height;

export const EditorAnimalsScreen: FC = ({navigation}: any) => {
  const route: any = useRoute();

  const {values, errors, onChange, submit, choseImageFromLibbrary} =
    useEditorAnimal(route.params?.id);

  const handleSubmit = () => {
    submit();
    navigation.navigate(RouteKey.AnimalsList);
  };

  return (
    <ScreenLayout style={styles.container}>
      <View>
        <View style={[styles.previewImg, {borderWidth: values.imgUrl ? 0 : 1}]}>
          {values.imgUrl ? (
            <Image
              source={{uri: values.imgUrl}}
              style={{height: '100%', width: '100%', borderRadius: 20}}
              resizeMode="contain"
            />
          ) : (
            <Txt mod="xl" color="#FFFF">
              Your image
            </Txt>
          )}
        </View>
        <PrimaryButton
          onPress={choseImageFromLibbrary}
          textContent="Open picker"
        />
        <TextField
          styleField={{marginVertical: 10}}
          label="Name"
          value={values.name}
          onChange={val => onChange('name', val)}
          placeholder={'Name'}
          error={errors.name}
        />
        <TextField
          styleField={{marginVertical: 10}}
          label="Description"
          value={values.description}
          onChange={val => onChange('description', val)}
          placeholder={'Description'}
          error={errors.description}
        />
      </View>
      <PrimaryButton onPress={handleSubmit} textContent="Submit" />
    </ScreenLayout>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingBottom: 20,
  },
  previewImg: {
    height: SCREEN_HEIGHT * 0.3,
    marginVertical: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    borderColor: colors.primary,
  },
});
