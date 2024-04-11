/** @type {import('next').NextConfig} */
const nextConfig = {
    // swcMinify: false
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'cdn.sanity.io',
            },
        ],
    },
};

export default nextConfig;
