import { render, screen } from '@testing-library/react';
import App from './App';

describe('app', () => {
  beforeAll(() => {
    render(<App />);
  });

  test('That it renders a heading', () => {
    expect(screen.getByRole('heading', { name: /SDI Library/ })).toBeInTheDocument();
  });

  it('should render a list', () => {
    expect(screen.getByRole('list')).toBeInTheDocument();
  });
});
