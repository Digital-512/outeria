import { terser } from "rollup-plugin-terser";
import babel from "@rollup/plugin-babel";
import postcss from "rollup-plugin-postcss";
import autoprefixer from "autoprefixer";

// `npm run build` -> `production` is true
// `npm run dev` -> `production` is false
const production = !process.env.ROLLUP_WATCH;

export default {
    input: "src/outeria.ts",
    output: {
        name: "Outeria",
        file: "dist/outeria.min.js",
        format: "umd", // universal module definition - works as `amd`, `cjs` and `iife`
        sourcemap: true
    },
    plugins: [
        postcss({
            plugins: [autoprefixer],
            use: ["sass"],
            minimize: true,
            sourceMap: true,
            extract: true
        }),
        babel({
            babelHelpers: "bundled",
            extensions: [".js", ".jsx", ".ts", ".tsx"]
        }),
        production && terser({ compress: true, mangle: true }) // minify, but only in production
    ]
};
