import React, { useState } from 'react';
import { Share, StyleSheet, View, Dimensions, SafeAreaView, StatusBar, Keyboard } from 'react-native';

import { SearchBar } from './components/SearchBar';
import { SearchButton } from './components/SearchButton';
import { SongList } from './components/SongList';
import { SongListItem } from './components/SongListItem';

import fetchSongs from './api/fetchSongs';

import { Audio } from "expo-av";

const { width, height } = Dimensions.get('window');

export default function App() {
  const [textInput, setTextInput] = useState(null);
  const [songs, setSongs] = useState(null)
  const [songPlaying, setSongPlaying] = useState(null)

  Audio.setAudioModeAsync({
    allowsRecordingIOS: false,
    staysActiveInBackground: false,
    interruptionModeIOS: Audio.INTERRUPTION_MODE_IOS_DO_NOT_MIX,
    playsInSilentModeIOS: true,
    shouldDuckAndroid: true,
    interruptionModeAndroid: Audio.INTERRUPTION_MODE_ANDROID_DO_NOT_MIX,
    playThroughEarpieceAndroid: false
  });

  handleSearchPress = async () => {
    if (textInput) {
      const songs = await fetchSongs(textInput);
      setSongs(songs);

      Keyboard.dismiss();
    }
  }

  handlePlayPress = async(listItem) => {
    const { song, index } = listItem;
    if (songPlaying) {
      await this.soundObject.stopAsync();
      setSongPlaying(null)
    } else {
      this.soundObject = new Audio.Sound();
      try {
        await this.soundObject.loadAsync({ uri: listItem.preview });
        await this.soundObject.playAsync();
        setSongPlaying(`${song}-${index}`);
      } catch (error) {
        alert(error)
      }
    }
  }

  handleSharePress = async (listItem) => {
    try {
      await Share.share({
        message:
          `Check out this new song ${listItem.song} by ${listItem.artist} I found ${listItem.preview}`,
      });
    } catch (error) {
      alert(error.message);
    }
  }

  renderSong = ({ item, index }) => {
    const { song, artist, image, preview } = item;

    return (
      <SongListItem
        index={index}
        song={song}
        artist={artist}
        image={image}
        preview={preview}
        songPlaying={songPlaying}
        handlePlayPress={handlePlayPress}
        handleSharePress={handleSharePress}
      />
    )
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
      <SongList
        songs={songs}
        height={height}
        renderSong={renderSong}
      />
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
