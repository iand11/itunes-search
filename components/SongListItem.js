import React from 'react';
import { View, TouchableOpacity, Text,  Image, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export function SongListItem(props) {
  const { index, handleSharePress, handlePlayPress, song, artist, image, preview, songPlaying } = props;

  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10 }}>
      <View style={{ width: '60%', flexDirection: 'row', justifyContent: 'flex-start' }}>
        <Image style={{ height: 60, width: 60 }} source={{ uri: image }} />
        <View style={{ flexDirection: 'column', paddingLeft: 10 }}>
          <Text style={styles.songTitleText}>{song}</Text>
          <Text style={styles.artistNameText}>{`by ${artist}`}</Text>
        </View>
      </View>
      <View style={{ width: '20%', justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center' }}>
        <TouchableOpacity onPress={() => handleSharePress({ song, artist, preview })}>
          <MaterialIcons name="share" size={20} color="#aed8e0" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handlePlayPress({ song, artist, preview, index })}>
          <MaterialIcons name={songPlaying === `${song}-${index}` ? 'stop' : 'play-circle-filled'} size={40} color="#aed8e0" />
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles= StyleSheet.create({
  songTitleText: {
    fontSize: 18,
    fontWeight: '500'
  },
  artistNameText: {
    color: 'grey'
  }
})