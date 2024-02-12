/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		domains: [
			"avatars.githubusercontent.com",
			"lh3.googleusercontent.com",
			"res.cloudinary.com"
		]
	}
};

export default nextConfig;

// module.exports = {
// 	images: {
// 		remotePatterns: [
// 			{
// 				protocols: 'https',
// 				hostname: 'res.cloudinary.com',
// 				hostname: 'lh3.googleusercontent.com',
// 				hostname: 'avatars.githubusercontent.com',
// 				port: '',
// 				pathname: '**'
// 			}
// 		]
// 	}
// }

// module.exports = nextConfig;
