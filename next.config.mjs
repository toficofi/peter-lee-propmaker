/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (cfg) => {
        cfg.module.rules.push(
            {
                test: /\.md$/,
                loader: 'frontmatter-markdown-loader',
                options: { mode: ['react-component'] }
            }
        )
        return cfg
    },
    images: {
        formats: ['image/jpeg']
    }
};

export default nextConfig;
