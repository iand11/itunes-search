import React from 'react';
import { StyleSheet, TextInput } from 'react-native';

export function SearchBar(props) {
  const { value, onChangeText } = props;
  return (
    <TextInput
      style={styles.textInput}
      placeholder="Search iTunes"
      onChangeText={textInput => onChangeText(textInput)}
      value={value}
    />
  )
}

const styles = StyleSheet.create({
  textInput: {
    height: 40,
    width: '75%',
    backgroundColor: 'white',
    borderWidth: 1,
    borderRadius: 8,
    paddingLeft: 6,
    borderColor: '#ddd'
  }
});