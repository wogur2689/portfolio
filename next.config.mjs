/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    basePath: '/portfolio',
    assetPrefix: '/portfolio',
    trailingSlash: true, // 경로 뒤에 슬래시를 추가하여 파일 탐색 가능하게 설정
    images: {
        unoptimized: true  // 이미지 최적화 비활성화 (필요에 따라 설정)
    }
};

export default nextConfig;
