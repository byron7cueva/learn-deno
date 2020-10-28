const filenames = Deno.args;
for (const filename of filenames) {
  const file = await Deno.open(filename); // Open file
  await Deno.copy(file, Deno.stdout); // Copy the content to stdout
  file.close(); // File close
}

// deno run --allow-read read-file.ts pathFile