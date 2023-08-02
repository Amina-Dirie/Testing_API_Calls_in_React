import { rest } from 'msw';

export const handlers = [
  rest.get('https://swapi.dev/api/people/', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        results: [
          { name: 'Luke Skywalker'},
        ],
      })
    );
  }),
];