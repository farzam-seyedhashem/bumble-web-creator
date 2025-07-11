/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{hostname: 'localhost',},
			{hostname: '45.79.218.197',},
			{hostname: 'file.dealergenius.ai',}
		]
	},
	experimental: {
		serverActions: {
			bodySizeLimit: '20mb',
		},
	},
}

module.exports = nextConfig
