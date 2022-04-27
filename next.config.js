/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  webpack(config, { isServer }) {
    config.module.rules.push({
      test: /\.svg$/,
      issuer: /\.tsx?$/,
      use: [
        'next-swc-loader',
        {
          loader: '@svgr/webpack',
        },
      ],
    });

    if (!isServer) {
      config.resolve.fallback.fs = false;
      config.resolve.fallback.dns = false;
      config.resolve.fallback.net = false;
    }

    return config;
  },
};

module.exports = nextConfig;
