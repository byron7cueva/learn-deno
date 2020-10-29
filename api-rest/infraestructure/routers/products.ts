import { Router } from '../../deps.ts';

const products = new Router();

products.get('/api/products', (context) => {
  context.response.body = {status: 'Deno running!'};
});

products.get('/api/products/:id', (context) => {
  context.response.body = { param: context.params.id};
});

export { products };