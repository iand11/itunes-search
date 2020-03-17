import React from 'react';
import {shallow} from 'enzyme';
import { SearchButton } from '../components/SearchButton';


describe('SearchButton', () => {
  describe('Rendering', () => {
    it('should match to snapshot', () => {
      const component = shallow(<SearchButton handleSearchPress={() => {}}/>);
      expect(component).toMatchSnapshot()
    })
  })

  describe('Interactions', () => {
    describe('onPressHandler', () => {
      it('should call handleSearchPress', () => {
        const mockOnPress = jest.fn();
        const component = shallow(<SearchButton handleSearchPress={mockOnPress}/>);

        // when
        component.find('TouchableOpacity').props().onPress();

        // then
        expect(mockOnPress).toHaveBeenCalled();
        expect(mockOnPress).toHaveBeenCalledTimes(1);
      })
    })
  })
})