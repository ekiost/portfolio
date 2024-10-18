import { withContentCollections } from '@content-collections/next';

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
  experimental: {
    serverActions: {
      allowedOrigins: ['localhost:3000']
    }
  },
  output: "export",
  basePath: "/nextjs-github-pages",
  images: {
    unoptimized: true,
  },
};
