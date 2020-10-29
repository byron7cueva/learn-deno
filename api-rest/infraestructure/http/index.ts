import { Server } from './server.ts';

import { products } from '../routers/products.ts';

Server.getInstance().useRouter(products);

export {
  Server
}