import React from 'react';
import { shallow } from 'enzyme';

import { SongListItem } from '../components/SongListItem';
import fetchSongsMock from './mocks/fetchSongsMock';

describe('SongListItem', () => {
  const mockListItem = fetchSongsMock[0];
  const { song, artist, image, preview } = mockListItem;
  const defaultListItem = (
    <SongListItem
      index={'0'}
      handleSharePress={() => { }}
      handlePlayPress={() => { }}
      song={song}
      artist={artist}
      image={image}
      preview={preview}
      songPlaying={false}
    />
  )
  describe('Rendering', () => {
    it('should match to snapshot', () => {
      const component = shallow(defaultListItem);
      expect(component).toMatchSnapshot();
    })

    it('should display correct text and correct buttons', () => {
      const component = shallow(defaultListItem);
      const songText = component.find('Text').at(0).props().children
      const artistText = component.find('Text').at(1).props().children;
      const playButton = component.find('Icon').at(1).props().name

      expect(songText).toEqual(mockListItem.song)
      expect(artistText).toEqual(`by ${mockListItem.artist}`)
      expect(playButton).toEqual('play-circle-filled');
    })
  })

  describe('Interactions', () => {
    describe('onPressHandler', () => {
      const handleSharePressMock = jest.fn();
      const handlePlayPressMock = jest.fn();
      const pressHandlerComponent = (
        <SongListItem
            index={'0'}
            handleSharePress={handleSharePressMock}
            handlePlayPress={handlePlayPressMock}
            song={song}
            artist={artist}
            image={image}
            preview={preview}
            songPlaying={false}
          />
      )
      it('should call handleSharePress and handlePlayPress when pressed', () => {
        const component = shallow(pressHandlerComponent);
        const shareButton = component.find('TouchableOpacity').at(0);
        const playButton = component.find('TouchableOpacity').at(1);

        // when
        shareButton.props().onPress();

        // then
        expect(handleSharePressMock).toHaveBeenCalled();
        expect(handleSharePressMock).toHaveBeenCalledTimes(1);

        // when
        playButton.props().onPress();

        // then
        expect(handlePlayPressMock).toHaveBeenCalled();
        expect(handlePlayPressMock).toHaveBeenCalledTimes(1);
      })
    })
  })
})