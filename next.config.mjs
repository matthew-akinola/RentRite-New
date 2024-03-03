/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        remotePatterns: [
            {
              protocol: 'https',
              hostname: 'res.cloudinary.com',
              port: '',
              pathname: '/**',
            },
          ],
    },
    env:{
      BASE_URL: process.env.BASE_URL,
      APP_APP_URL: process.env.APP_APP_URL,
      BEARER_TOKEN : process.env.BEARER_TOKEN

    }
  };

export default nextConfig;