import { withContentCollections } from '@content-collections/next';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/nextjs-github-pages",
  images: {
    unoptimized: true,
  },
};
