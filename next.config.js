/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  // Focus only on pages directory, not src/app
  distDir: '.next',
  // Don't search pages in src directory
  useFileSystemPublicRoutes: true
}; 