import React from 'react';
import {shallow} from 'enzyme';

import { SongList } from '../components/SongList';
import fetchSongsMock from './mocks/fetchSongsMock';


describe('SongList', () => {
  describe('Rendering', () => {
    it('should match to snapshot', () => {
      const component = shallow(<SongList songs={null} height={400} renderSong={() => {}}/>);
      expect(component).toMatchSnapshot()
    })
  })

  describe('Interactions', () => {
    it('should not display a list when song prop is null', () => {
      const component = shallow(<SongList songs={null} height={400} renderSong={() => {}}/>);
      const instructions = "Type something into the search bar to begin.";
      const text = component.find('Text').props().children;

      expect(text).toEqual(instructions);
    })

    it('should display a list when song prop is not null', () => {
      const mockLength = fetchSongsMock.length;
      const mockRenderSongs = jest.fn();
      const component = shallow(<SongList songs={fetchSongsMock} height={900} renderSong={mockRenderSongs}/>);
      const list = component.find('FlatList')

      expect(list.length).toEqual(1);
      expect(list.props().data.length).toEqual(mockLength);
    })
  })
})