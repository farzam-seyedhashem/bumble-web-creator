/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{hostname: 'localhost',}
		]
	},
	experimental: {
		serverActions: {
			bodySizeLimit: '20mb',
		},
	},
}

module.exports = nextConfig
