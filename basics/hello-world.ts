// deno run --allow-net hello-world.ts 
// deno run --allow-net=0.0.0.0:8000 hello-world.ts 
import { serve } from 'https://deno.land/std@0.75.0/http/server.ts';

const s = serve({ port: 8000 });

console.log("http://localhost:8000");

// Async iterators
// Cada vez que se resiva un request se ejcuta lo
// siguiente
for await (const req of s) {
  req.respond({ body: "Hello world"});
}