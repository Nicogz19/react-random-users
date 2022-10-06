import { render, fireEvent, screen } from '@testing-library/react';
import Search from '../components/Search';

test('seteo valor en el input search', () => {
  render(<Search handleChangeSearch={() => {}} />)
  const input = screen.getByTestId('content-input')

  fireEvent.change(input, {target: {value: 'nicolas'}})
  expect(input.value).toBe('nicolas')
});
