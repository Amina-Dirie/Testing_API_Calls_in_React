import { render, screen } from '@testing-library/react';
import App from './App';
import { server } from './mock/browser';

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test('renders the first person fetched from the API', async () => {
  render(<App />);
  const firstPerson = await screen.findByText('Luke Skywalker');
  expect(firstPerson).toBeInTheDocument();
});
