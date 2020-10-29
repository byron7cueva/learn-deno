import { Server } from './infraestructure/http/index.ts';
Server.getInstance().run();
// console.log(`Server running on http://localhost:${PORT}`);
// PORT=3001 deno run --allow-net=0.0.0.0:3001 --allow-env main.ts
