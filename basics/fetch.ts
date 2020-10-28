const url = Deno.args[0]; // Obteniendo el argumento
const res = await fetch(url);

const body = new Uint8Array(await res.arrayBuffer());
await Deno.stdout.write(body);

// deno run --allow-net fetch.ts http://example.com