import path from "path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // Ensure Turbopack uses this folder as the workspace root when it infers roots
  // (prevents it from accidentally selecting a parent directory's lockfile).
  turbopack: {
    root: path.resolve(__dirname),
  },
};

export default nextConfig;
