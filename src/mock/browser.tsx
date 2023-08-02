import { setupServer } from 'msw/node';
import { handlers } from './Helpers';

const server = setupServer(...handlers);

export { server };