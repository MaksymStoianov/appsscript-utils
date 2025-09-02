import { resolve } from "path";
import { defineConfig } from "vitest/config";

export default defineConfig(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
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
