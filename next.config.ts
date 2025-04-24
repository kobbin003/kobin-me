import type { NextConfig } from "next";
import { WebpackConfigContext } from "next/dist/server/config-shared";

const nextConfig: NextConfig = {
	/* config options here */
	webpack: (config, rest: WebpackConfigContext) => {
		// console.log("rest: ", rest);
		return config;
	},
};

const withBundleAnalyzer = require("@next/bundle-analyzer")({
	enabled: process.env.ANALYZE === "true",
});

module.exports = withBundleAnalyzer(nextConfig);
