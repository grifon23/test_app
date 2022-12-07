import React, {FC} from 'react';
import {StyleSheet, TextInput, View, ViewStyle} from 'react-native';
import {colors} from '../../theme';
import {Txt, TxtError} from '../typography';

interface IProps {
  label?: string;
  value: string;
  onChange: (val: string) => void;
  placeholder?: string;
  error?: string;
  containerStyle?: ViewStyle | ViewStyle[];
  styleField?: ViewStyle | ViewStyle[];
}
export const TextField: FC<IProps> = ({
  label,
  value,
  onChange,
  containerStyle,
  styleField,
  placeholder,
  error,
}) => {
  return (
    <View>
      {label ? (
        <Txt mod="sm" color="#FFFF">
          {label}
        </Txt>
      ) : null}
      <TextInput
        placeholder={placeholder}
        value={value}
        onChangeText={onChange}
        style={[styles.input, styleField]}
      />
      {error ? <TxtError>{error}</TxtError> : null}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {width: '100%', flexDirection: 'column'},
  input: {
    marginTop: 10,
    borderRadius: 10,
    fontSize: 16,
    padding: 10,
    backgroundColor: colors.lightPrimary,
    color: '#FFFF',
    width: '100%',
  },
});
