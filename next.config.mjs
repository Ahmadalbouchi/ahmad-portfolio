/** @type {import('next').NextConfig} */
const nextConfig = {
    headers: async() => [{
        source: "/_next/static/:path*",
        headers: [{
            key: "Content-Type",
            value: "application/javascript",
        }, ],
    }, ],
};
export default nextConfig;