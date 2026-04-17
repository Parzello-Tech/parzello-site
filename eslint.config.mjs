import { dirname } from "path";
import { fileURLToPath } from "url";
import nextConfig from "eslint-config-next/core-web-vitals";

export default [
  ...nextConfig,
  {
    ignores: [
      ".next/**",
      "node_modules/**",
      "out/**",
      "public/**"
    ]
  }
];
