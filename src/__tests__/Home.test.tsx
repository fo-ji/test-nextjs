import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Home from '../pages/index';

it('Should render hello text', () => {
  render(<Home />);
  expect(screen.getByText('Welcome to Nextjs')).toBeInTheDocument();
  // screen.debug();
});
