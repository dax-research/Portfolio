import { networkInterfaces } from "node:os";
import type { NextConfig } from "next";

const privateIpv4Addresses = Object.values(networkInterfaces()).flatMap(
  (interfaces) =>
    interfaces
      ?.filter(
        (networkInterface) =>
          !networkInterface.internal &&
          networkInterface.family === "IPv4" &&
          (networkInterface.address.startsWith("10.") ||
            networkInterface.address.startsWith("192.168.") ||
            /^172\.(1[6-9]|2\d|3[01])\./.test(networkInterface.address)),
      )
      .map((networkInterface) => networkInterface.address) ?? [],
);

const nextConfig: NextConfig = {
  allowedDevOrigins: privateIpv4Addresses,
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
