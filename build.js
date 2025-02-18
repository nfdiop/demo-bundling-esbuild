const esbuild = require("esbuild");

esbuild
  .build({
    entryPoints: ["src/index.tsx"],
    bundle: true,
    outfile: "dist/bundle.js",
    loader: { ".tsx": "tsx", ".ts": "ts", ".json": "json" },
    define: {
      "process.env.NODE_ENV": '"production"',
    },
    minify: true,
    target: ["es2015"],
  })
  .catch(() => process.exit(1));
