import MetaHead from "./common/page";

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <MetaHead></MetaHead>
      <body>
        {/* Layout UI */}
        <main>{children}</main>
      </body>
    </html>
  )
}