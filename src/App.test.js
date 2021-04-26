import { render, screen } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import App from './App';

// const server = setupServer(
//   rest.get('http://localhost:3001/api/books', (req, res, ctx) => res(ctx.json([{ title: 'Great Expectations' }]))),
// );

// beforeAll(() => server.listen());
// afterEach(() => server.resetHandlers());
// afterAll(() => server.close());

describe('app', () => {
  beforeEach(() => {
    render(<App />);
  });

  test('That it renders a heading', () => {
    expect(screen.getByRole('heading', { name: /SDI Library/ })).toBeInTheDocument();
  });

  it('should render a list', async () => {
    expect(screen.getByRole('list')).toBeInTheDocument();

    const listItems = await screen.findAllByRole('listitem');
    expect(listItems).toHaveLength(10);
  });
});
