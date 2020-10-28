import { Router } from './deps.ts';

const api = new Router();

api.get('/', (context) => {
  context.response.body = {status: 'Deno running!'};
});

api.get('/:id', (context) => {
  context.response.body = { param: context.params.id};
});

export { api };