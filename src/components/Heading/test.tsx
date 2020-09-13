import { screen } from '@testing-library/react';
import { renderWithTheme } from 'utils/tests/helpers';
import 'jest-styled-components';

import Heading from '.';

describe('<Heading />', () => {
  it('should render a black heading by default', () => {
    renderWithTheme(<Heading>YLW games</Heading>);
    expect(screen.getByRole('heading', { name: /YLW games/i })).toHaveStyle({
      color: '#000000'
    });
  });

  it('should render a white heading when color is passed', () => {
    renderWithTheme(<Heading color="white">YLW games</Heading>);
    expect(screen.getByRole('heading', { name: /YLW games/i })).toHaveStyle({
      color: '#FFFFFF'
    });
  });

  it('should render heading with a line to the left side', () => {
    renderWithTheme(<Heading lineLeft>YLW games</Heading>);
    expect(screen.getByRole('heading', { name: /YLW games/i })).toHaveStyle({
      'border-left': '0.7rem solid #FFCB00'
    });
  });
  it('should render heading with a line at the bottom', () => {
    renderWithTheme(<Heading lineBottom>YLW games</Heading>);
    expect(screen.getByRole('heading', { name: /YLW games/i })).toHaveStyleRule(
      'border-bottom',
      '0.5rem solid #FFCB00',
      {
        modifier: '::after'
      }
    );
  });
});
