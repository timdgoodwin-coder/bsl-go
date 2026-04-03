/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/listicle-1',
        destination: '/brain',
        permanent: true,
      },
      {
        source: '/listicle-2',
        destination: '/age',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
