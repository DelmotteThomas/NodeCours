import esbuild from "esbuild";

esbuild.build({
  entryPoints: ["src/index.js"],
  bundle: true,
  platform: "node",
  outfile: "dist/index.js",
  sourcemap: true,
  format: "esm",
  target: "node20"
}).then(() => {
  console.log("✅ Build ESBuild terminé !");
}).catch((err) => {
  console.error("❌ Erreur ESBuild :", err);
  process.exit(1);
});
