import { render, screen } from '@testing-library/react';
import Skeleton from '../components/Skeleton';

test('pruebo si el skeleton hace el render correctamente', () => {
  render(<Skeleton />);
  const skeleton = screen.getByTestId('skeleton');
  expect(skeleton).toBeInTheDocument();
});