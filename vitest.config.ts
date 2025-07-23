import { defineConfig } from "vitest/config";
import { join, resolve } from "path";

export default defineConfig(
  async ({ command, mode, isSsrBuild, isPreview }) => {
    const rootDir = process.cwd();

    return {
      test: {
        globals: true
      },
      resolve: {
        alias: {
          "@": resolve(rootDir, "./src")
        }
      }
    };
  }
);
