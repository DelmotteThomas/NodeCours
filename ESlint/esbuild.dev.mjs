import esbuild from "esbuild";

const ctx = await esbuild.context({
  entryPoints: ["src/index.js"],
  bundle: true,
  platform: "node",
  outfile: "dist/index.js",
  sourcemap: true,
  format: "esm",
  target: "node20"
});

await ctx.watch();
console.log("🚀 ESBuild watching…");
