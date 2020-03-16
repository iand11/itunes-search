import React, { useState } from 'react';
import { StyleSheet, View, Dimensions, SafeAreaView, StatusBar, Keyboard } from 'react-native';

import { SearchBar } from './components/SearchBar';
import { SearchButton } from './components/SearchButton';

import fetchSongs from './api/fetchSongs';

const { width, height } = Dimensions.get('window');

export default function App() {
  const [textInput, setTextInput] = useState(null);
  const [songs, setSongs] = useState(null)

  handleSearchPress = async() => {
    if (textInput) {
      const songs = await fetchSongs(textInput);
      setSongs(songs);

      Keyboard.dismiss();
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle={'dark-content'} />
      <View style={styles.searchContainer}>
        <SearchBar
          onChangeText={textInput => setTextInput(textInput)}
          value={textInput}
        />
        <SearchButton handleSearchPress={handleSearchPress} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  searchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width,
    paddingLeft: 5,
    paddingRight: 5,
    paddingTop: 10,
    marginBottom: 10,
  }
});
