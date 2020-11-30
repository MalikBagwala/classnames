import typescript from "rollup-plugin-typescript2";
import { terser } from "rollup-plugin-terser";
import commonjs from "@rollup/plugin-commonjs";
import pkg from "./package.json";
export default {
  input: "index.ts",
  output: [
    {
      file: pkg.main,
      format: "cjs",
    },
    {
      file: pkg.module,
      format: "es",
    },
  ],
  plugins: [commonjs(), typescript(), terser()],
};
