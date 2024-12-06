/// <reference types="vitest" />
import { defineConfig, coverageConfigDefaults } from "vitest/config";

export default defineConfig({
  test: {
    environment: "jsdom",
    setupFiles: ["vitest.setup.ts"],
    coverage: {
      exclude: [
        ...coverageConfigDefaults.exclude,
        "stryker.config.mjs",
        "./src/main.ts",
      ],
    },
  },
});
