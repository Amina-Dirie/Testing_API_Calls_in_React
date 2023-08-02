import { render, screen } from '@testing-library/react';
import App from './App';
import { server } from './mock/browser';
import { rest } from 'msw';

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test('renders the first person fetched from the API', async () => {
  render(<App />);
  const firstPerson = await screen.findByText('Luke Skywalker');
  expect(firstPerson).toBeTruthy(); 
});


test('displays an error message for Status Code 500', async () => {
  server.use(
    rest.get('https://swapi.dev/api/people/', (req, res, ctx) => {
      return res(ctx.status(500));
    })
  );

  render(<App />);
  const errorMessage = await screen.findByText("Oops... something went wrong, try again 🤕");
  expect(errorMessage).toBeTruthy(); 
});

test('displays an error message for Status Code 418', async () => {
  server.use(
    rest.get('https://swapi.dev/api/people/', (req, res, ctx) => {
      return res(ctx.status(418));
    })
  );

  render(<App />);
  const errorMessage = await screen.findByText("418 I'm a tea pot 🫖, silly");
  expect(errorMessage).toBeTruthy(); 
});