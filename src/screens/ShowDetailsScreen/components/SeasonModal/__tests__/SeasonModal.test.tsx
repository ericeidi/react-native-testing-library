import React, {createRef} from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import {SeasonModal} from '../SeasonModal';
import {Modalize} from 'react-native-modalize';
import {act} from 'react-test-renderer';

describe('Modal was loaded', () => {
  it('render all the seasons option', () => {
    const modalizeRef = createRef<Modalize>();

    const {getAllByText} = render(
      <SeasonModal
        ref={modalizeRef}
        selectedSeason={'1'}
        onSelectSeason={season => console.log(season)}
        seasons={['1', '2', '3']}
      />,
    );

    act(() => {
      modalizeRef.current?.open();
    });

    expect(getAllByText(/season/i, {exact: false}).length).toBe(3);
  });

  it('click the second option', () => {
    const modalizeRef = createRef<Modalize>();

    const mockedSeason = jest.fn();

    const {getByText} = render(
      <SeasonModal
        ref={modalizeRef}
        selectedSeason={'1'}
        onSelectSeason={mockedSeason}
        seasons={['1', '2', '3']}
      />,
    );

    act(() => {
      modalizeRef.current?.open();
    });

    const seasons2Element = getByText(/season 2/i);
    fireEvent.press(seasons2Element);

    expect(mockedSeason).toBeCalledWith('2');
  });
});
