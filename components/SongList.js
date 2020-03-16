import React from 'react';
import { View, Text, FlatList } from 'react-native';

export function SongList(props) {
  renderSongList = () => {
    const { songs, renderSong, height } = props;

    if (!songs) {
      return (
        <View style={{ height: height * .8, justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ color: 'grey' }}>Type something into the search bar to begin.</Text>
        </View>
      )
    }

    return (
      <FlatList
        data={songs}
        renderItem={renderSong}
        keyExtractor={(item, index) => `${item.song}-${index}`}
      />
    )
  }

  return (
    renderSongList()
  )
}