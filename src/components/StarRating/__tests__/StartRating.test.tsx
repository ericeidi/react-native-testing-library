import React from 'react';
import {render} from '@testing-library/react-native';
import {StarRating} from '../StarRating';

describe('StartRating', () => {
  describe('rating was passed', () => {
    it('should render the text', () => {
      const {getByText} = render(<StarRating rating={{average: 2}} />);
      const element = getByText('2');
      expect(element).toBeTruthy();
    });
    it('should render the star icon', () => {
      const {getByTestId} = render(<StarRating rating={{average: 2}} />);
      const icon = getByTestId('starIcon');
      expect(icon).toBeTruthy();
    });
  });
  describe('rating was not passed', () => {
    it('should not render', () => {
      const {root} = render(<StarRating />);
      expect(root).toBeUndefined();
    });
  });
});
