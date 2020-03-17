import React from 'react';
import {shallow} from 'enzyme';
import { SearchBar } from '../components/SearchBar';

describe('SearchBar', () => {
  describe('Rendering', () => {
    it('should match to snapshot', () => {
      const component = shallow(<SearchBar placeHolder="Search iTunes" onChangeText={() => {}}/>);
      expect(component).toMatchSnapshot()
    })
  });

  describe('Interactions', () => {
    describe('On text change', () => {
      it('should call onChangeText', () => {
        const mockOnChange = jest.fn();
        const component = shallow(<SearchBar placeHolder="Search iTunes" onChangeText={mockOnChange}/>);

        // when
        component.find('TextInput').simulate('changeText', 'this is a test');

        // then
        expect(mockOnChange).toHaveBeenCalled();
        expect(mockOnChange).toHaveBeenCalledWith('this is a test');
      })
    })
  })
})