import React from 'react';
import {render} from '@testing-library/react-native';
import {StarRating} from '../StarRating';

describe('StartRating', () => {
  it('should render the icon when the average value is passed', () => {
    const {getByText} = render(<StarRating rating={{average: 2}} />);
    const element = getByText('2');
    expect(element).toBeTruthy();
  });
});
