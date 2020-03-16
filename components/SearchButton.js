import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';

export function SearchButton(props) {
  const { handleSearchPress } = props;
  return (
    <TouchableOpacity style={styles.button} onPress={handleSearchPress}>
      <Text style={styles.buttonText}>Search</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    height: 40,
    alignItems: 'center',
    backgroundColor: '#aed8e0',
    borderRadius: 8,
    padding: 10
  },
  buttonText: {
    color: 'white'
  }
});