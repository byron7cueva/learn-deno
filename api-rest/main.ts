import { Application } from "./deps.ts";
import { api } from './api.ts';

const env = Deno.env.toObject();
const app = new Application();
const PORT = parseInt(env.PORT) || 3000;

app.use(api.routes());
await app.listen({ port: PORT })
// console.log(`Server running on http://localhost:${PORT}`);
// PORT=3001 deno run --allow-net=0.0.0.0:3001 --allow-env main.ts
