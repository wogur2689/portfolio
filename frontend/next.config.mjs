/** @type {import('next').NextConfig} */
const nextConfig = {
    assetPrefix:
    process.env.NODE_ENV === "production"
      ? "https://wogur2689.github.io/portfolio"
      : "",
    output: 'export',
    trailingSlash: true, // 경로 뒤에 슬래시를 추가하여 파일 탐색 가능하게 설정
    images: {
        unoptimized: true  // 이미지 최적화 비활성화 (필요에 따라 설정)
    }
};

export default nextConfig;
