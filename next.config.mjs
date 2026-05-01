/** @type {import('next').NextConfig} */
const nextConfig = {
    reactCompiler: true,
    async redirects() {
        return [
            {
                source: '/',
                destination: '/watch',
                permanent: false,
            },
        ];
    },
};

export default nextConfig;
