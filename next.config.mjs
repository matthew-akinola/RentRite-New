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
    // env:{
    //   BASE_URL: "https://rentrite-homes.up.railway.app",
    //   APP_APP_URL: "http://localhost:30001",
    //   BEARER_TOKEN :  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzA3ODA3NzQ1LCJpYXQiOjE3MDczNzU3NDUsImp0aSI6IjJiZmQ1ZTMxMDFhZTQ0MjdiMjc2YmY4MjQ4NzczOTc3IiwidXNlcl9pZCI6ImJiY2IxZTJjLWI0NGMtNDYxZC04MmEzLWY0YTdmMDNlNGU1MyJ9.Hak4KoKtgr2B5N78Ip1H6KdX5lNF3hJ1y_-Ngco0Y3c"
    // }
  };

export default nextConfig;